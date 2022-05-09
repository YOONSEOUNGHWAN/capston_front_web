import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Piechart extends Component {
	render() {
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "000마을 통계"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 18, label: "Direct" },
					{ y: 49, label: "Organic Search" },
					{ y: 9, label: "Paid Search" },
					{ y: 5, label: "Referral" },
					{ y: 19, label: "Social" }
				]
			}]
		}
		return (
		<>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</>
		);
	}
}
export default Piechart;
