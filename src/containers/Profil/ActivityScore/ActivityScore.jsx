import "./ActivityScore.css";
import { Pie, PieChart, ResponsiveContainer, Sector } from "recharts";
import PropTypes from "prop-types";

/** ActivityScore, pie chart of the daily score completion of user objectif *
 *  @param {array} score - score of the user
 */
export const ActivityScore = ({ score }) => {
    /** Display of the inactive shape of the pie
     * @param {number} cx - coordinate x of the pie
     * @param {number} cy - coordinate y of the pie
     * @param {number} startAngle - start angle of the pie
     * @param {number} enAngle - end angle of the pie
     * @param {number} outerRadius - outer radius of the pie
     */
    const inactiveShape = ({ cx, cy, startAngle, endAngle, outerRadius }) => (
        <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={0}
            outerRadius={outerRadius}
            fill="white"
        />
    );

    /** Display of the active shape of the pie
     * @param {number} cx - coordinate x of the pie
     * @param {number} cy - coordinate y of the pie
     * @param {number} startAngle - start angle of the pie
     * @param {number} enAngle - end angle of the pie
     * @param {number} outerRadius - outer radius of the pie
     */
    const activeShape = ({ cx, cy, startAngle, endAngle, outerRadius }) => (
        <g>
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius}
                outerRadius={outerRadius + 10}
                fill="var(--color-second)"
                cornerRadius={5}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={0}
                outerRadius={outerRadius}
                fill="white"
            />
        </g>
    );

    return (
        <div className="activity-score">
            <h3>Score</h3>
            <ResponsiveContainer height="100%" width="100%">
                <PieChart margin={{ top: 15, left: 15, right: 15, bottom: 15 }}>
                    <Pie
                        activeIndex={0}
                        data={score}
                        dataKey="score"
                        inactiveShape={inactiveShape}
                        activeShape={activeShape}
                        startAngle={-280}
                    />
                </PieChart>
            </ResponsiveContainer>
            <div className="activity-score__descr">
                {score[0].score * 100}%<div>de votre objectif</div>
            </div>
        </div>
    );
};

ActivityScore.propTypes = {
    score: PropTypes.array,
};
