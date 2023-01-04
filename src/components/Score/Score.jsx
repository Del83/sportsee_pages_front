import React from 'react';
import propTypes from 'prop-types';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import "./Score.css";

/**
 * @param {Array} data Score data 
 * @return {JSX} React radial chart component using Recharts
 */
function Score( { data } ) {

    const scoreMax = {
        score: 100,
        fill : "#FBFBFB"
    }

    const formattedData = {
        name: "data1",
        score: data*100,
        fill: "#FF0000",
    }

    return (
        <div className='score'>
            <h2 className='score-title'>Score</h2>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart 
                    cx="50%"
                    cy="50%"
                    barSize={10}
                    innerRadius="80%" 
                    outerRadius="80%" 
                    data={[scoreMax,formattedData]} 
                    startAngle={90} 
                    endAngle={500}
                    margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
                    >
                    <RadialBar 
                        background={{ fill: '#FFFFFF' }} 
                        cornerRadius={10}  
                        dataKey="score" 
                    />
                    <circle cx="50%" cy="50%" fill="white" r="74"></circle>
                </RadialBarChart>
            </ResponsiveContainer>  
            <p className='score-resum'>
                <span className='score-number'>{data*100} %</span>
                <br/>de votre<br/>objectif
            </p>
        </div>
    )
}

Score.propTypes = {
    data: propTypes.number,
}

export default Score