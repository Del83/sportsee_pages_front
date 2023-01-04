import React from 'react';
import propTypes from 'prop-types';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import "./Performance.css";

/**
 * Create an performance radar chart
 * @param {Array} data Performance data 
 * @param {Object} kind Performance category
 * @returns {JSX} React radar chart component using Recharts
 */
function Performance( { data, kind } ) {

    const titleKind = {
        cardio: 'Cardio',
        energy: 'Energie',
        endurance: 'Endurance',
        strength: 'Force',
        speed: 'Vitesse',
        intensity: 'Intensité',
    }
    const formatKind = (id) => titleKind[kind[id]]

    return (
        <div className='performance'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart 
                    cx="50%" 
                    cy="50%" 
                    outerRadius="65%"
                    startAngle={210}
                    endAngle={570}
                    width={258} 
                    height={250} 
                    data={data} 
                >
                    <PolarGrid 
                        radialLines={false} 
                        stroke='#ffffff'
                    />
                    <PolarAngleAxis 
                        dataKey="kind" 
                        tickFormatter={formatKind}
                        tick={{ fill: "#FFFFFF", fontSize: "12px" }} 
                        tickSize={15}
                    />
                    <PolarRadiusAxis 
                        tickCount={6} 
                        tick={false} 
                        axisLine={false}
                    />
                    <Radar 
                        dataKey="value" 
                        fill="#FF0101" 
                        stroke="#ff0000" 
                        fillOpacity={0.6} 
                    />
                </RadarChart>
            </ResponsiveContainer>  
        </div>        
    )
}

Performance.propTypes = {
    data: propTypes.array,
    kind: propTypes.object,
}

export default Performance;