import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "./userinfo.css";

import Nav from "../.part/nav";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Graph from "../.part/graph";
import { useQuery } from "react-query";

export default function UserInfo() {
  const location = useLocation();
  const userName = location.state.userdata.name;
  const userPhone = location.state.userdata.phone;
  const userAddress = location.state.userdata.address;
  const userId = location.state.userdata.key;
  const loginName = location.state.loginName;
  const townId = location.state.userdata.townId;
  const townName = location.state.townName;

  const [protectorName, setProtectorName] = useState("");
  const [protectorPhone, setProtectorPhone] = useState("");

  useEffect(() => {
    axios
      .get(`/api/protector/terminal/${userId}`) //
      .then((res) => {
        // 여러명의 보호자 중 첫번째로 등록된 사람만 보여줌.
        setProtectorName(res.data.data[0].name);
        setProtectorPhone(res.data.data[0].phone);
      })
      .catch((e) => {
        console.log(`Protector info Error${e}`);
      });
  }, [userId]);


  return (
    <>
      <Nav username={loginName} role={true} townId={townId} />
      <div className="Container" id="user_content">
        <br />
        <br />
        <h1>
          {" "}
          {townName}마을 {userName} 사용자
        </h1>
        <br />
        <br />

        <div className="user_info">
          <Card
            title={`${userName} 사용자 정보`}
            size="large"
            className="card"
            id="info_card"
          >
            <br />
            <h3>전화번호: {userPhone}</h3>
            <br />
            <h3>주소: {userAddress}</h3>
            <br />
            <br />
            <br />
            <br />

            <h3>보호자 성함:{protectorName}</h3>
            <br />
            <h3>보호자 전화번호: {protectorPhone}</h3>
            <br />
          </Card>

          <Card
            title="***님의 정보"
            size="large"
            className="card"
            id="data_card"
          >
            {/* <DataTable /> */}
            <Graph userId={userId} />
          </Card>
        </div>
      </div>
    </>
  );
}
