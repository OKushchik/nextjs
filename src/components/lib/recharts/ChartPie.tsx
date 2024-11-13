'use client'
import {ResponsiveContainer, PieChart, Pie, Cell, Tooltip} from 'recharts';
import {FC} from "react";
import {TWorkStatusChart} from "@/model/Types";

interface IProps {
  data: TWorkStatusChart[];
}

export const ChartPie:FC<IProps>=({data})=> {

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} fill="#8884d8" label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

