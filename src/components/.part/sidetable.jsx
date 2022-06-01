import React, { useEffect, useState } from "react";
import { Progress } from 'antd';
import './sidetable.css'
import axios from "axios";
export default function Sidetable() {
  const [town_num, setTown_num] = useState()
  const [user_num, setUser_num] = useState()
  const [manager_num, setManager_num] = useState()
  const [event_num, setEvent_num] = useState()
  const [message_num, setMessage_num] = useState()

  useEffect(() => {
    axios
    .all([axios.get('/api/town'), axios.get('/api/terminal'), axios.get('/api/manager/'), axios.get('/api/events/'), axios.get('/api/message')])
    .then(
      axios.spread((res1, res2, res3, res4, res5) =>{
        setTown_num(res1.data.data.length)
        setUser_num(res2.data.data.length)
        setManager_num(res3.data.data.length)
        setEvent_num(res4.data.data.length)
        setMessage_num(res5.data.data.length)
      })
    )
  })
  

  return (
    <>
    <div className="sideTable">
      <p>관리현황</p>
      <Progress percent={town_num} type="line" format={(percent) => percent+'개 관리마을'}/>
      <Progress percent={user_num} status="active" strokeColor="green" format={(percent)=>percent+'명 사용자'}/>
      <Progress percent={manager_num}  strokeColor="yellow" format={(percent)=>percent+'명 관리자'}/>
      <Progress percent={event_num} status="success"  strokeColor="orange" format={(percent)=>percent+'회 일정'}/>
      <Progress percent={message_num} strokeColor="red" status="exception" format={(percent)=>percent+'회 문자발송' } />
    </div>
    </>
  );
}
