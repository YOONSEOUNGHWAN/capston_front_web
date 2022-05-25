import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ModalButton from "../.part/modalbutton";
import ModalUser from "../.part/modaluser";
import Nav from "../.part/nav";
import Piechart from "../.part/piechart";
import Tablelist from "../.part/tablelist";
import "./town.css";

export default function Town() {
  let location = useLocation();
  let username = location.state.name;
  let role = location.state.role;
  let uid = location.state.uid;
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


  // console.log(`hi${townId.data.data[0].id}`)
  return (
    <>
      <Nav username={username} role={role} />
      <div className="Container">
        <div className="leftSide">
          <p>000마을 인원</p>
          <Tablelist townId={townId} />
        </div>
        <div className="rightSide_town">
          <Piechart />
          <div className="button_town">
            <span className="button">
              <ModalButton text="문자 버튼" />
            </span>
            <span className="button">
              <ModalButton text="행사 버튼" />
            </span>
            <div className="userbutton">
              <ModalUser text="사용자추가" townId={townId} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
