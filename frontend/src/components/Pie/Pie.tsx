import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';
import { Pie as PieReactChart } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DataProps{
    value:number,
    label:string
}

export interface PieProps {
    className?:string
    data: DataProps[]
    dataLabel:string
    width?:string
    height?:string
}

export default function Pie({data,className="",dataLabel="",width="494px",height="494px"}:PieProps) {
    const pieData:ChartData<"pie", number[], string> = {
        labels: [...data.map((d)=>d.label)],
        datasets: [
          {
            label: dataLabel,
            data: [...data.map((d)=>d.value)],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return <PieReactChart  className={className} data={pieData} />;
  }