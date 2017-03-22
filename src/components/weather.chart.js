import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    let sum = 0;

    data.forEach(function(element) {
      sum += element;  
    })
    return Math.round(sum/data.length);
}

const Chart = (props) => {
    return (
        <div>
            <Sparklines width={props.width} height={props.height} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.unit}</div>
        </div>
    )
}

export default Chart;