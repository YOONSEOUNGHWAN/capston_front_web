import React from "react";
import { Progress } from 'antd';
import './sidetable.css'
export default function Sidetable() {
  return (
    <>
    <div className="sideTable">
      <p>관리현황</p>
      <Progress percent={30} type="line" format={(percent) => percent+'명 관리마을'}/>
      <Progress percent={50} status="active" format={(percent)=>percent+'명 사용자'}/>
      <Progress percent={70} status="exception" format={(percent)=>percent+'회 장애'}/>
      <Progress percent={100} status="success" format={(percent)=>percent+'회 정상'}/>
      <Progress percent={50} strokeColor="orange" trailColor="black" format={(percent)=>percent+'회 대기' } />
    </div>
    </>
  );
}
