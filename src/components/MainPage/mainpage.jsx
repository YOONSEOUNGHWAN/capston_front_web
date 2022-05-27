import React, { useEffect, useState } from "react";
import Circle from "../.part/circle";
import Log from "../.part/log";
import "./mainpage.css";
import ModalButton from "../.part/modalbutton";
import ModalUser from "../.part/modaluser";
import Sidetable from "../.part/sidetable";
import Tablelist from "../.part/tablelist";
import Nav from "../.part/nav";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ModalText from "../.part/modaltext";

// 시스템 관리자 페이지.
export default function Middlepage() {
  let location = useLocation();
  let username = location.state.name;
  let role = location.state.role;
  let uid = location.state.uid;


  return (
    <>
      <div className="login_box">
        <Nav username={username} role={role} />
        <div className="Container">
          <div className="leftSide">
            <div className="leftUp">
              <>
              {/* 각 서클에는 */}
                <Circle username={username} role={role}/>
              </>
            </div>
            <div className="leftDown">
              <Tablelist />
            </div>
          </div>
          <div className="rightSide">
            <span className="button">
              <ModalUser text="사용자 추가" />
            </span>
            <Sidetable />
            <span className="button">
              <ModalText text="문자 버튼" />
            </span>
            <span className="button">
              <ModalButton text="행사 버튼" />
            </span>
            <p className="log">
              <Log />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
