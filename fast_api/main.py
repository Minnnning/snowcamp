from fastapi import FastAPI
from pydantic import BaseModel
import os

app = FastAPI()

from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Food(BaseModel):
    food_name: str
    description: str
    
class Food_modify(BaseModel):
    description: str
    
url ="/Users/minnnning/Desktop/눈송이/fast_api/db/"

@app.get("/")
def root():
    return {"냉장고"}

    
@app.post('/food/create') # 음식 저장하기
def create_food(food: Food):
    data = food.dict()
    f = open(url+data['food_name']+".txt", 'w')
    f.write(data['description'])
    f.close()

    return { 'food_name':data['food_name'],'description':data['description']}

@app.delete('/food/delete/{food_name}') #삭제
def delete_food(food_name: str):
    f = open(url+food_name+".txt", 'r')
    data = f.readline()
    f.close()
    os.remove(f"/Users/minnnning/Desktop/눈송이/fast_api/db/{food_name}.txt")
    
    return {data}

@app.get('/food') #저장된 음식 이름을 출력
def get_foods():
    foods_list = []
    file_list = os.listdir(url)
    for file in file_list:
        f = open(url+file, 'r')
        text = f.readline()
        foods_list.append({"food_name":file[:-4],"description":text})
        f.close()
    
    return {"foods":foods_list}

@app.get('/foods') #저장된 음식 개수
def get_foods_len():
    file_list = os.listdir(url)
    size = len(file_list)
    
    return {"foods_num":size}

@app.put('/food/change/{food_name}') # 내용 수정하기
def put(food_name: str,food: Food_modify):
    data = food.dict()
    f = open(url+food_name+".txt", 'w')
    f.write(data['description'])
    f.close()
    
    return {}

@app.put('/food/change_all/{food_name}') # 제목 + 내용 수정하기
def put(food_name: str,food: Food):
    data = food.dict()
    f = open(url+food_name+".txt", 'w')
    f.write(data['description'])
    f.close()
    os.rename(url+food_name+".txt", url+data['food_name']+'.txt')
    
    return {}