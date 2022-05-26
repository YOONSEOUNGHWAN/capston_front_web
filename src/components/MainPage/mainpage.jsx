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

export default function Middlepage() {
  let location = useLocation();
  let username = location.state.name;
  let role = location.state.role;
  let uid = location.state.uid;
  console.log(username)
  const [townId, setTownId] = useState();
  useEffect(() => {
    axios
      .get(`/api/town/${uid}`) //
      .then((res) => {
        setTownId(res.data.data[0].id);
      })
      .catch((e) => {
        console.log(`townidError${e}`);
      });
  });


  return (
    <>
      <div className="login_box">
        <Nav username={username} role={role} />
        <div className="Container">
          <div className="leftSide">
            <div className="leftUp">
              <>
                <Circle />
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
              <ModalButton text="문자 버튼" />
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
