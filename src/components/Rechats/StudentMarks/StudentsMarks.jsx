import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
  } from 'recharts';

const StudentsMarks = () => {
    const students = [
        { id: 1, name: "John", physics: 70, chemistry: 80, math: 90 },
        { id: 2, name: "Jane", physics: 80, chemistry: 85, math: 75 },
        { id: 3, name: "Mark", physics: 90, chemistry: 70, math: 80 },
        { id: 4, name: "Emily", physics: 65, chemistry: 75, math: 85 },
        { id: 5, name: "Mike", physics: 75, chemistry: 90, math: 70 },
        { id: 6, name: "Sarah", physics: 85, chemistry: 80, math: 85 },
        { id: 7, name: "David", physics: 80, chemistry: 75, math: 90 },
        { id: 8, name: "Linda", physics: 70, chemistry: 85, math: 80 },
        { id: 9, name: "Paul", physics: 75, chemistry: 80, math: 75 },
        { id: 10, name: "Amy", physics: 80, chemistry: 90, math: 85 },
        { id: 11, name: "Tom", physics: 90, chemistry: 70, math: 75 },
        { id: 12, name: "Kim", physics: 75, chemistry: 80, math: 90 }
      ];      
    return (
        <div className=''>
            <LineChart
            width={1000}
            height={500}
            data={students}
            >
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line
                dataKey="physics"
                stroke='#8884d8'
                
                />
                <Line
                dataKey="math"
                stroke='#82ca9d'
                />
                <Line
                dataKey="chemistry"
                stroke='#82ca9d'
                />
            </LineChart>
        </div>
    );
};

export default StudentsMarks;