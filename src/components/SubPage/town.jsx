import React from "react";
import ModalButton from "../.part/modalbutton";
import Nav from "../.part/nav";
import Piechart from "../.part/piechart";
import Tablelist from "../.part/tablelist";
import "./town.css";

export default function Town() {
  return (
    <>
      <Nav />
      <div className="Container">
        <div className="leftSide">
          <p>000마을 인원</p>
          <Tablelist />
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
          </div>
        </div>
      </div>
    </>
  );
}
