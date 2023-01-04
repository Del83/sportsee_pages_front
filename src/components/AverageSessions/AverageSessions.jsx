import React from 'react';
import propTypes from 'prop-types';
import { XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, ResponsiveContainer, Rectangle } from 'recharts';
import CustomTooltip from "../CustomTooltip/CustomTooltip"
import "./AverageSessions.css";


/**
 * Create a line chart with session data
 * @param {Array} data Data from daily sessions
 * @param {String} title Title of the chart
 * @returns {JSX} React line chart component using Recharts
 */
function AverageSessions ( { data, title } ) {

    const CustomCursor = (props) => {
        const { width } = props;
        const cord = props.points[1]
        return (
                <Rectangle className='bob' fill="rgba(0, 0, 0, 0.1)" x={cord.x} y={cord.y - 218} width={width} height={263}/>
        )
    }

    return (
        <div className='average-sessions'> 
           <h2 className='average-title'>{title}</h2>
                <ResponsiveContainer width="100%" height="80%">
                    <LineChart 
                        width={258} 
                        height={263} 
                        data={data} 
                        margin={{ right: -2, top: 80, left: -2, bottom: -10 }}>
                    <CartesianGrid 
                        vertical={false} 
                        horizontal={false}
                    />
                    <XAxis 
                        dataKey="day" 
                        tick={{ fill: '#ffffff', opacity: 0.5}} 
                        tickLine={{ stroke: "", padding: 25 }} 
                        axisLine={{ stroke: "" }} 
                        interval="preserveStartEnd"
                        style={{ transform: 'scale(0.9)', transformOrigin: 'bottom'}}
                    />
                    <YAxis 
                        domain={['dataMin -20', 'dataMax 15']} 
                        hide={true} 
                    />
                    <Tooltip 
                        content={<CustomTooltip/>} 
                        cursor={<CustomCursor/>}
                    />
                    <Line 
                        type="natural"  
                        dataKey="sessionLength" 
                        stroke='#ffffff' 
                        opacity="0.5" 
                        dot={false}
                        activeDot={{ r: 3 }} 
                        strokeWidth={2}
                        unit="min" 
                    />   
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

AverageSessions.propTypes = {
    title: propTypes.string,
    data: propTypes.array,
}

export default AverageSessions