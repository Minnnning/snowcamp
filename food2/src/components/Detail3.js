import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

export default class Example extends PureComponent {

  render() {

    const kcal = this.props.kcal;
    const carbohydrate = this.props.carbohydrate;
    const protein = this.props.protein;
    const fat = this.props.fat;

    const data =[
        {
            subject: '총 열량(kcal)',
            A: {kcal},
        },
        {
            subject: '탄수화물(g)',
            A: {carbohydrate},
        },
        {
            subject: '단백질(g)',
            A: {protein},
        },
        {
            subject: '지방(g)',
            A: {fat},
        },
    ];

    return (
      <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    );
  }
}