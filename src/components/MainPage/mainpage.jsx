import React from "react";
import Circle from "../.part/circle";
import Log from "../.part/log";
import "./mainpage.css";
import ModalButton from "../.part/modalbutton";
import Sidetable from "../.part/sidetable";
import Tablelist from "../.part/tablelist";
import Nav from "../.part/nav";

export default function Middlepage() {
  return (
    <>
      <Nav />
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
    </>
  );
}
