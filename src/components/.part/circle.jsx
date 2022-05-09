import React from "react";
import { Progress } from "antd";

export default function Circle() {
  return (
    <>
      <sapn style={{ marginRight: "30px" }}>
        <Progress type="circle" percent={75} />
      </sapn>
      <span style={{ marginRight: "30px" }}>
        <Progress type="circle" percent={70} status="exception" />
      </span>
      <a href="#">
        <span style={{ marginRight: "30px" }}>
          <Progress type="circle" percent={100} format={() => `00마을`} />
        </span>
      </a>
      <sapn style={{ marginRight: "30px" }}>
        <Progress type="circle" percent={75} />
      </sapn>
      <span style={{ marginRight: "30px" }}>
        <Progress type="circle" percent={70} status="exception" />
      </span>
      <span style={{ marginRight: "30px" }}>
        <Progress type="circle" percent={100} />
      </span>
    </>
  );
}
