import React from "react";
import { Card } from "antd";
import "./userinfo.css";

import DataTable from "../.part/datatable";

import Piechart from "../.part/piechart";
export default function UserInfo() {
  return (
    <>
      <div className="Container">
        <div className="leftside_userinfo">
          <Card title="김이박" size="large" className="card">
            <p>엄마번호: 010-0011-1100</p>
            <p>주소: ㅁㄴㅇㄹㄴ</p>
            <p>나이 : 84</p>
            <p>전화번호: 02-323-2313</p>
            <p>등등의 정보</p>
          </Card>
          <Piechart />
        </div>
        <div className="rightside_userinfo">
          <DataTable />
        </div>
      </div>
    </>
  );
}
