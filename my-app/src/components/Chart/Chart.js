import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'
// import PropTypes from "prop-types";

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const dataMaxValue = Math.max(...dataPointValues);

    // let maxValue = 0;
    // props.dataPoints.forEach(element => {
    //     if (element.value > maxValue) {
    //         maxValue = element.value;
    //     }
    // });

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => {
                return (<ChartBar
                    value={dataPoint.value}
                    maxValue={dataMaxValue}
                    label={dataPoint.label}
                    key={dataPoint.label}
                />);
            })}
        </div>
    );

};




export default Chart;