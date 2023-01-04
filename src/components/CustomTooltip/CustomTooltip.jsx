import propTypes from 'prop-types';
import "./CustomTooltip.css";

/** Custom tooltip
 * @param {boolean} active indicates if tooltip active
 * @param {array} payload data to display in the tooltip
 * @return {JSX} React tooltip component 
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {

        return (
            <div className={payload[0].fill === "#fff" ? "tooltip-sessions" : "tooltip-activity"}>
                <ul className={payload[0].fill === "#fff" ? "tooltip-ctn-sessions" : "tooltip-ctn-activity"}>
                    {payload[0] ? (<li>{payload[0].value} {payload[0].unit}</li>) : null}
                    {payload[1] ? (<li>{payload[1].value} {payload[1].unit}</li>) : null}
                </ul>
            </div>
        )
    }
}

CustomTooltip.propTypes = {
    active: propTypes.bool,
    payload: propTypes.array,
}

export default CustomTooltip;