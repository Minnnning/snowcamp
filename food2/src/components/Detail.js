import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";


export default function App(props) {
    const data =[
        {   
            subject: '총 열량(kcal)',
            A:  props.data.NUTR_CONT1,
        },
        {
            subject: '탄수화물(g)',
            A: props.data.NUTR_CONT2 * 4 ,    
        },
        {
            subject: '단백질(g)',
            A: props.data.NUTR_CONT3 * 4,
        },
        {
            subject: '지방(g)',
            A: props.data.NUTR_CONT4 * 9,
        },
    ];
    console.log('탄',data[1].A,'단',data[2].A,'지',data[3].A);
  return (
    <>
    <h2>{props.data.DESC_KOR}</h2>
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
    </>
  );
}
