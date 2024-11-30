"use client"
import React, {FC} from 'react';
import {BarChart, Bar, ResponsiveContainer, XAxis} from 'recharts';
import {TTechnologiesChart} from "@/model/Types";

interface IProps {
  data: TTechnologiesChart[]
}

export const TinyBarChart:FC<IProps> =({data})=> {
    return (
      <div style={{height: '300px'}}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
            <XAxis dataKey="name" />
            <Bar dataKey="value" fill="#8884d8" label radius={5} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    );
}
