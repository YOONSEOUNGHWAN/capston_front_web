import React, { Component } from 'react';

import CanvasJSReact from '../../assets/canvasjs.react'
import DataTable from '../.part/datatable';
import Nav from '../.part/nav';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Canvas extends Component {
  constructor() {
    super();
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
  }

  toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }

  render() {
    const options = {
      theme: "light2",
      animationEnhqawwnabled: true,
      title: {
        text: "사용통계",
      },
      subtitles: [
        {
          text: "Click Legend to Hide or Unhide Data Series",
        },
      ],
      axisX: {
        title: "States",
      },
      axisY: {
        title: "Units Sold",
        titleFontColor: "#6D78AD",
        lineColor: "#6D78AD",
        labelFontColor: "#6D78AD",
        tickColor: "#6D78AD",
      },
      axisY2: {
        title: "Profit in USD",
        titleFontColor: "#51CDA0",
        lineColor: "#51CDA0",
        labelFontColor: "#51CDA0",
        tickColor: "#51CDA0",
      },
      toolTip: {
        shared: true,
      },
      legend: {
        cursor: "pointer",
        itemclick: this.toggleDataSeries,
      },
      data: [
        {
          type: "spline",
          name: "Units Sold",
          showInLegend: true,
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "#,##0 Units",
          dataPoints: [
            { x: new Date(2017, 0, 1, 12, 5, 10), y: 100 },
            { x: new Date(2017, 0, 1, 12, 5, 20), y: 100 },
            { x: new Date(2017, 0, 1, 12, 5, 30), y: 100 },
            { x: new Date(2017, 0, 1, 12, 5, 40), y: 100 },



      
          ],
        },
        // {
        //   type: "spline",
        //   name: "Profit",
        //   axisYType: "secondary",
        //   showInLegend: true,
        //   xValueFormatString: "MMM YYYY",
        //   yValueFormatString: "$#,##0.#",
        //   dataPoints: [
        //     { x: new Date(2017, 0, 1), y: 19034.5 },
        //     { x: new Date(2017, 1, 1), y: 20015 },
        //     { x: new Date(2017, 2, 1), y: 27342 },
        //     { x: new Date(2017, 3, 1), y: 20088 },
        //     { x: new Date(2017, 4, 1), y: 20234 },
        //     { x: new Date(2017, 5, 1), y: 29034 },
        //     { x: new Date(2017, 6, 1), y: 30487 },
        //     { x: new Date(2017, 7, 1), y: 32523 },
        //     { x: new Date(2017, 8, 1), y: 20234 },
        //     { x: new Date(2017, 9, 1), y: 27234 },
        //     { x: new Date(2017, 10, 1), y: 33548 },
        //     { x: new Date(2017, 11, 1), y: 32534 },
        //   ],
        // },
      ],
    };

    return (
      <>
        <Nav/>
        {/* <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} /> */}
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        <DataTable/>
      </>
    );
  }
}

export default Canvas;
