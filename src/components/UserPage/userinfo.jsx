import React from "react";
import { Card } from "antd";
import "./userinfo.css";

import DataTable from "../.part/datatable";

import Piechart from "../.part/piechart";
import Nav from "../.part/nav";
export default function UserInfo() {
  return (
    <>
      <div className="Container" id="user_info">
        <Nav/>
        <br /><br />

        <div className="stats">
          <Card title="컴공 마을 차트" size="large" className="card" id="chart_card">
            <Piechart />
          </Card>

          <Card title=" 컴공 마을 데이터" size="large" className="card" id="data_card">
            <DataTable />
          </Card>
        </div>

        <br /><br />

        <p className="title"> ** 마을 사용자 통계</p>
        <div className="user_info">
          <Card title="로인" size="large" className="card" id="info">
            <p>전화번호: 010-000-0000</p>
            <p>주소: 서울특별시 광진구 군자동 어딘가</p>
            <p>나이 : 84</p>
            <p>보호자 성함: 로인아들</p>
            <p>보호자 전화번호: 010-1111-1111</p>
          </Card>

          <Card title="로인2" size="large" className="card" id="info">
            <p>전화번호: 010-000-0000</p>
            <p>주소: 서울특별시 광진구 군자동 어딘가</p>
            <p>나이 : 84</p>
            <p>보호자 성함: 로인아들</p>
            <p>보호자 전화번호: 010-1111-1111</p>
          </Card>

          <Card title="로인3" size="large" className="card" id="info">
            <p>전화번호: 010-000-0000</p>
            <p>주소: 서울특별시 광진구 군자동 어딘가</p>
            <p>나이 : 84</p>
            <p>보호자 성함: 로인아들</p>
            <p>보호자 전화번호: 010-1111-1111</p>
          </Card>

          <Card title="로인4" size="large" className="card" id="info">
            <p>전화번호: 010-000-0000</p>
            <p>주소: 서울특별시 광진구 군자동 어딘가</p>
            <p>나이 : 84</p>
            <p>보호자 성함: 로인아들</p>
            <p>보호자 전화번호: 010-1111-1111</p>
          </Card>

          <Card title="로인5" size="large" className="card" id="info">
            <p>전화번호: 010-000-0000</p>
            <p>주소: 서울특별시 광진구 군자동 어딘가</p>
            <p>나이 : 84</p>
            <p>보호자 성함: 로인아들</p>
            <p>보호자 전화번호: 010-1111-1111</p>
          </Card>

          <Card title="로인6" size="large" className="card" id="info">
            <p>전화번호: 010-000-0000</p>
            <p>주소: 서울특별시 광진구 군자동 어딘가</p>
            <p>나이 : 84</p>
            <p>보호자 성함: 로인아들</p>
            <p>보호자 전화번호: 010-1111-1111</p>
          </Card>
        </div>

      </div> 
    </>
  );
}
