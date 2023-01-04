import React, {Suspense} from 'react';
import propTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomTooltip from "../CustomTooltip/CustomTooltip"
import "./Activity.css";

/**
 * Create an activity bar chart
 * @param {Array} data Daily activity data 
 * @param {String} title Title of the chart
 * @param {String} xDataKey Date of data 
 * @param {String} yDataKey1 User weight data
 * @param {String} yDataKey2 Number of calories
 * @returns {JSX} React bar chart component using Recharts
 */function Activity( { title, data, xDataKey, yDataKey1, yDataKey2 } ) {

    const dateDay = (value)=>(new Date(value)).getDate()
    
    const renderLegend = () => {
        return (
            <ul className='legend-ctn'>
                <li key={`item-poids`} className="legend-poids" > Poids (kg)</li>
                <li key={`item-calories`} className="legend-calories" > Calories brûlées (kCal)</li>
            </ul>
        );
    }

    return (
        <div className='activity'>
                <Suspense fallback={<div>Chargement...</div>}>
                    <h2 className='activity-title'> {title} </h2>     
                    <ResponsiveContainer width={"100%"} height={325} >  
                    <BarChart 
                            width={835} 
                            height={325} 
                            data={data} 
                            margin={ {top: 24, right: 30, bottom: 25, left: 40} } 
                            barGap={8}
                        >
                        <CartesianGrid 
                            vertical={false} s
                            trokeDasharray="2 2" 
                            width={"max-content"}
                            />
                        <XAxis 
                            dataKey={xDataKey} 
                            tickLine={false}  
                            stroke= '#DEDEDE' 
                            tick={{fill: '#9B9EAC', fontSize:"14", fontWeight:"500"}} 
                            tickFormatter={dateDay} 
                            height={50}
                            tickSize={25}
                            padding={ {top: 0, right: -45, bottom: 20, left: -45} } 
                            //scale="bande"
                            />
                        <YAxis 
                            yAxisId='kilogram'
                            orientation='right'                                      
                            tickLine={false} 
                            axisLine={false} 
                            tickSize={45}
                            tickCount="4" 
                            type="number" 
                            domain={['dataMin -1', 'dataMax + 1']} 
                            allowDecimals={false}
                            tick={{fill: '#9B9EAC', fontSize:"14", fontWeight:"500"}} 
                            />
                        <YAxis 
                            yAxisId="calories"                     
                            dataKey={yDataKey2} 
                            domain={['dataMin-50','dataMax+50']}
                            hide={true}
                            />

                        <Tooltip 
                            content={<CustomTooltip/>} 
                            offset={35}
                            cursor={{ fill:"rgba(196, 196, 196, 0.5)", width: 56, transform: "translate(28)" }}
                            />
                        <Legend 
                            iconType="cercle"
                            iconSize="8"
                            content={renderLegend}
                            verticalAlign="top" 
                        />
                        <Bar 
                            name=" Poids (kg)" 
                            yAxisId='kilogram'                     
                            dataKey={yDataKey1} 
                            fill="#282D30" 
                            barSize={7}  
                            radius={[3,3,0,0]} 
                            unit="Kg"
                        />
                        <Bar 
                            name=' Calories brûlées (kCal)' 
                            yAxisId='calories' 
                            dataKey={yDataKey2} 
                            fill="#E60000" 
                            barSize={7}  
                            radius={[3,3,0,0]}
                            unit="Kcal"
                        />
                        </BarChart> 
                    </ResponsiveContainer>      
                </Suspense>
        </div>
    )
}
    
Activity.propTypes = {
    title: propTypes.string,
    data: propTypes.array,
    xDataKey: propTypes.string,
    yDataKey1: propTypes.string,
    yDataKey2: propTypes.string,
}

export default Activity
