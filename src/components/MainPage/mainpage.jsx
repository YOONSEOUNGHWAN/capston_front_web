import React from "react";
import Circle from "../.part/circle";
import Log from "../.part/log";
import "./mainpage.css";

import Sidetable from "../.part/sidetable";
import Tablelist from "../.part/tablelist";
import Nav from "../.part/nav";
import { useLocation } from "react-router-dom";

import ModalTown from "../.part/modalTown";
import ModalManager from "../.part/modalManager";

// 시스템 관리자 페이지.
export default function Middlepage() {
  let location = useLocation();
  let username = location.state.name;
  let role = location.state.role;

  return (
    <>
      <div className="login_box">
        <Nav username={username} role={false} />
        <div className="Container">
          <div className="leftSide">
            <div className="leftUp">
              <>
                {/* 각 서클에는 */}
                <Circle username={username} role={role} />
              </>
            </div>
            <div className="leftDown">
              <Tablelist />
            </div>
          </div>
          <div className="rightSide">
            <Sidetable />
            <span className="button">
              <ModalTown text="마을 추가" />
            </span>
            <span className="button">
              <ModalManager text="관리자 추가" />
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
