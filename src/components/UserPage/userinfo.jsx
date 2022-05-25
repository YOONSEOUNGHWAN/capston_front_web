import React from "react";
import { Card } from "antd";
import "./userinfo.css";

import DataTable from "../.part/datatable";
import Nav from "../.part/nav";

export default function UserInfo() {
  return (
    <>
    <Nav/>
      <div className="Container" id="user_content">
        
        <br/><br/><h1> ** 마을 *** 사용자</h1><br/><br/>

        <div className="user_info">
          <Card title="*** 사용자 정보" size="large" className="card" id="info_card">
            <h3>전화번호: 010-000-0000</h3><br/>
            <h3>주소: 서울특별시 광진구 군자동 어딘가</h3><br/>
            <h3>나이: 84</h3><br/>
            <h3>보호자 성함: 로인아들</h3><br/>
            <h3>보호자 전화번호: 010-1111-1111</h3><br/>
          </Card>

          <Card title="***님의 정보" size="large" className="card" id="data_card">
            <DataTable />
          </Card>

        </div>
      </div> 
    </>
  );
}