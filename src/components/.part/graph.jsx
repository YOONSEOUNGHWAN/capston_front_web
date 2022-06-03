import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import CanvasJSReact from "../../assets/canvasjs.react";

let CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function Graph({ userId }) {
  const [userData, setUserData] = useState([]);
  const [options, setOptions] = useState({
    theme: "light2",
    animationEnhqawwnabled: true,
    title: {
      text: "센서 통계",
    },
    subtitles: [
      {
        text: "사용자 센서 데이터",
      },
    ],
    axisX: {
      title: "States",
    },
    axisY: {
      title: "10s update",
      titleFontColor: "#6D78AD",
      lineColor: "#6D78AD",
      labelFontColor: "#6D78AD",
      tickColor: "#6D78AD",
    },
    axisY2: {
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
    },
    data: [
      {
        type: "spline",
        name: "temper_humid_sensor",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "#,##0 Units",
        dataPoints: [],
      },
      {
        type: "spline",
        name: "smoke_sensor",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.#",
        dataPoints: [],
      },
      {
        type: "spline",
        name: "camera_sensor",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.#",
        dataPoints: [],
      },
      {
        type: "spline",
        name: "motion_sensor",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.#",
        dataPoints: [],
      },
      {
        type: "spline",
        name: "illuminance_sensor",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.#",
        dataPoints: [],
      },
      {
        type: "spline",
        name: "flame_sensor",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.#",
        dataPoints: [],
      },
      {
        type: "spline",
        name: "sound_sensor",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.#",
        dataPoints: [],
      },
    ],
  });
  useQuery("userData", () => {
    axios
      .get(`/api/terminal_info/${userId}`)
      .then((res) => {
        setUserData(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  useEffect(() => {
    const camera = [];
    const flame = [];
    const illumi = [];
    const motion = [];
    const smoke = [];
    const sound = [];
    const temper = [];
    userData.map((item) => {
      const year = item.time.slice(0, 4);
      const month = item.time.slice(5, 7);
      const day = item.time.slice(8, 10);
      const hour = item.time.slice(11, 13);
      const min = item.time.slice(14, 16);
      const sec = item.time.slice(17, 19);
      camera.push({
        x: new Date(year, month, day, hour, min, sec),
        y: item.camera_sensor,
      });
      flame.push({
        x: new Date(year, month, day, hour, min, sec),
        y: item.flame_sensor,
      });
      illumi.push({
        x: new Date(year, month, day, hour, min, sec),
        y: item.illuminance_sensor,
      });
      motion.push({
        x: new Date(year, month, day, hour, min, sec),
        y: item.motion_sensor,
      });
      smoke.push({
        x: new Date(year, month, day, hour, min, sec),
        y: item.smoke_sensor,
      });
      sound.push({
        x: new Date(year, month, day, hour, min, sec),
        y: item.sound_sensor,
      });
      temper.push({
        x: new Date(year, month, day, hour, min, sec),
        y: item.temper_humid_sensor,
      });
    });

    const update = [
      {
        type: "spline",
        name: "temper_humid_sensor",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "#,##0회",
        dataPoints: temper,
      },
      {
        type: "spline",
        name: "smoke_sensor",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "#,##0회",

        dataPoints: smoke,
      },
      {
        type: "spline",
        name: "camera_sensor",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "#,##0회",

        dataPoints: camera,
      },
      {
        type: "spline",
        name: "motion_sensor",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "#,##0회",

        dataPoints: motion,
      },
      {
        type: "spline",
        name: "illuminance_sensor",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "#,##0회",

        dataPoints: illumi,
      },
      {
        type: "spline",
        name: "flame_sensor",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "#,##0회",

        dataPoints: flame,
      },
      {
        type: "spline",
        name: "sound_sensor",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "#,##0회",

        dataPoints: sound,
      },
    ];

    setOptions({
      ...options,
      data: update,
    });
  }, [userData]);

  return (
    <>
      <CanvasJSChart options={options} />
    </>
  );
}
