import axios from "axios";
import React, { useEffect, useState } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Piechart({ townName, townId }) {
  const [announce_num, setAnnounce_num] = useState();
  const [communication_problems, setCommunication_problems] = useState();
  const [emergency_num, setEmergency_num] = useState();
  const [event_num, setEvent_num] = useState();
  const [people_num, setPeople_num] = useState();
  const [urgent_announce_num, setUrgent_announce_num] = useState();

  useEffect(() => {
    axios
      .get(`/api/town`)
      .then((res) => {
        return res.data.data.filter((item) => item.id == townId)[0];
      })
      .then((data) => {
        setAnnounce_num(data.announce_num);
        setCommunication_problems(data.communication_problems);
        setEmergency_num(data.emergency_num);
        setEvent_num(data.event_num);
        setPeople_num(data.people_num);
        setUrgent_announce_num(data.urgent_announce_num);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [townId]);

  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: `${townName} 마을 정보`,
    },
    data: [
      {
        type: "pie",
        startAngle: 50,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: announce_num, label: "알림횟수" },
          { y: communication_problems, label: "통신장애" },
          { y: emergency_num, label: "긴급호출" },
          { y: event_num, label: "행사횟수" },
          { y: people_num, label: "마을인원" },
          { y: urgent_announce_num, label: "긴급호출" },
        ],
      },
    ],
  };
  return (
    <>
      <CanvasJSChart options={options} />
    </>
  );
}
