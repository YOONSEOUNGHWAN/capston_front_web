import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useQuery } from "react-query";

import CanvasJSReact from "../../assets/canvasjs.react";

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Graph({ userId }) {
  //   const [userData, setUserData] = useState([]);
  //   const [camera, setCamera] = useState([]);
  //   const [flame, setFlame] = useState([]);
  //   const [illumi, setIllumi] = useState([]);
  //   const [motion, setMotion] = useState([]);
  //   const [smoke, setSmoke] = useState([]);
  //   const [sound, setSound] = useState([]);
  //   const [temper, setTemper] = useState([]);

  const [userData, setUserData] = useState([]);
  // const [camera, setCamera] = useState([]);
  const camera = [];
  // const [flame, setFlame] = useState([]);
  const flame = [];
  // const [illumi, setIllumi] = useState([]);
  const illumi = [];
  // const [motion, setMotion] = useState([]);
  const motion = [];
  // const [smoke, setSmoke] = useState([]);
  const smoke = [];
  // const [sound, setSound] = useState([]);
  const sound = [];
  // const [temper, setTemper] = useState([]);
  const temper = [];

  //   { x: new Date(2017, 0, 1, 12, 5, 40), y: 100 },
  useQuery(
    "userData",
    () => {
      axios
        .get(`/api/terminal_info/1`)
        .then((res) => {
          setUserData(res.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [userId]
  );

  useEffect(() => {
    userData.map((item) => {
      //   console.log(item);
      const year = item.time.slice(0, 4);
      const month = item.time.slice(5, 7);
      const day = item.time.slice(8, 10);
      const hour = item.time.slice(11, 13);
      const min = item.time.slice(14, 16);
      const sec = item.time.slice(17, 19);

      //   console.log(camera);
      //   setCamera([
      //     ...camera,
      //     {
      //       x: new Date(year, month, day, hour, min, sec),
      //       y: item.camera_sensor,
      //     },
      //   ]);
      camera.push({
        x: new Date(year, month, day, hour, min, sec),
        y: item.camera_sensor,
      });

      //   setFlame([
      //     ...flame,
      //     {
      //       x: new Date(year, month, day, hour, min, sec),
      //       y: item.flame_sensor,
      //     },
      //   ]);

      flame.push({
        x: new Date(year, month, day, hour, min, sec),
        y: item.flame_sensor,
      });

      //   setIllumi([
      //     ...illumi,
      //     {
      //       x: new Date(year, month, day, hour, min, sec),
      //       y: item.illuminance_sensor,
      //     },
      //   ]);

      illumi.push({
        x: new Date(year, month, day, hour, min, sec),
        y: item.illuminance_sensor,
      });

      //   setMotion([
      //     ...motion,
      //     {
      //       x: new Date(year, month, day, hour, min, sec),
      //       y: item.motion_sensor,
      //     },
      //   ]);

      motion.push({
        x: new Date(year, month, day, hour, min, sec),
        y: item.motion_sensor,
      });

      //   setSmoke([
      //     ...smoke,
      //     {
      //       x: new Date(year, month, day, hour, min, sec),
      //       y: item.smoke_sensor,
      //     },
      //   ]);

      smoke.push({
        x: new Date(year, month, day, hour, min, sec),
        y: item.smoke_sensor,
      });

      //   setSound([
      //     ...sound,
      //     {
      //       x: new Date(year, month, day, hour, min, sec),
      //       y: item.sound_sensor,
      //     },
      //   ]);

      sound.push({
        x: new Date(year, month, day, hour, min, sec),
        y: item.sound_sensor,
      });

      //   setTemper([
      //     ...temper,
      //     {
      //       x: new Date(year, month, day, hour, min, sec),
      //       y: item.temper_humid_sensor,
      //     },
      //   ]);

      temper.push({
        x: new Date(year, month, day, hour, min, sec),
        y: item.temper_humid_sensor,
      });
    });

    console.log(temper);
  }, [userData]);

  const options = {
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
        dataPoints: temper,
      },
      {
        type: "spline",
        name: "smoke_sensor",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.#",
        dataPoints: smoke,
      },
      {
        type: "spline",
        name: "camera_sensor",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.#",
        dataPoints: camera,
      },
      {
        type: "spline",
        name: "motion_sensor",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.#",
        dataPoints: motion,
      },
      {
        type: "spline",
        name: "illuminance_sensor",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.#",
        dataPoints: illumi,
      },
      {
        type: "spline",
        name: "flame_sensor",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.#",
        dataPoints: flame,
      },
      {
        type: "spline",
        name: "sound_sensor",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.#",
        dataPoints: sound,
      },
    ],
  };
  return (
    <>
      <CanvasJSChart options={options} />
    </>
  );
}
