import React from "react";
import { Timeline } from "antd";

export default function Log() {
  return (
    <>
      <Timeline mode="alternate">
        <Timeline.Item>김성욱 - 17011069</Timeline.Item>
        <Timeline.Item color="green">
          윤승환 - 17011092
        </Timeline.Item>
        <Timeline.Item color="red">
          전진우 - 12345678
        </Timeline.Item>
        <Timeline.Item>
          이현동 - 12345678
        </Timeline.Item>
      </Timeline>
    </>
  );
}
