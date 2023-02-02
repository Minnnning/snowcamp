from fastapi import FastAPI
from pydantic import BaseModel
import os

app = FastAPI()


class Food(BaseModel):
    food_name: str
    description: str
    
class Food_modify(BaseModel):
    description: str
    
url ="/Users/minnnning/Desktop/눈송이/fast_api/db/"

@app.get("/")
def root():
    return {"냉장고"}

    
@app.post('/food') #
def create_food(food: Food):
    data = food.dict()
    f = open(url+data['food_name']+".txt", 'w')
    f.write(data['description'])
    f.close()

    return { 'food_name':data['food_name'],'description':data['description']}

@app.delete('/food/{food_name}')
def delete_food(food_name: str):
    f = open(url+food_name+".txt", 'r')
    data = f.readline()
    os.remove(r"/Users/minnnning/Desktop/눈송이/fast_api/db/"+food_name+".txt")
    return {data}

@app.get('/food')
def get_foods():
    foods_list = []
    file_list = os.listdir(url)
    for file in file_list:
        f = open(url+file, 'r')
        text = f.readline()
        foods_list.append({"food_name":file[:-4],"description":text})
    
    return {"foods":foods_list}

@app.get('/foods')
def get_foods_len():
    file_list = os.listdir(url)
    size = len(file_list)
    
    return {"foods_num":size}

@app.put('/food/change/{food_name}') # 내용 수정하기
def put(food_name: str,food: Food_modify):
    data = food.dict()
    f = open(url+food_name+".txt", 'w')
    f.write(data['description'])
    
    return {}

@app.put('/food/change_all/{food_name}') # 제목 + 내용 수정하기
def put(food_name: str,food: Food):
    data = food.dict()
    f = open(url+food_name+".txt", 'w')
    f.write(data['description'])
    os.rename(url+food_name+".txt", url+data['food_name']+'.txt')
    
    return {}