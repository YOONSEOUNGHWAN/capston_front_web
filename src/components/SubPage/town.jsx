import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ModalButton from "../.part/modalbutton";
import ModalText from "../.part/modaltext";
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
  const [town_name, setTown_name] = useState("");
  // 시스템 관리자를 통해서 들어오게되면, 이미 townId를 가지고 있으니 이를 uid에 받아와서 사용할 것이고,
  // 마을 관리자면 기존 시나리오와 동일하게 관리자 아이디로 townId를 조회하여 사용할 것 .
  useEffect(() => {
    if (role === "ROLE_USER") {
      axios
        .get(`/api/town/${uid}`) //
        .then((res) => {
          setTownId(res.data.data[0].id);
          setTown_name(res.data.data[0].town_name);
        })
        .catch((e) => {
          console.log(`townidError${e}`);
        });
    } else {
      setTownId(uid);
      setTown_name(location.state.town_name);
    }
  }, [role, uid, location.state.town_name]);

  return (
    <>
      {townId && (
        <>
          <Nav username={username} role={role} townId={townId} />
          <div className="Container">
            <div className="leftSide">
              <p>{town_name} 인원</p>
              <Tablelist townId={townId} role={role} />
            </div>
            <div className="rightSide_town">
              <Piechart />
              <div className="button_town">
                <span className="button">
                  <ModalText text="문자 버튼" townId={townId} />
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
      )}
    </>
  );
}
