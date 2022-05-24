import React from "react";
import { Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

import "./nav.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../assets/store";

export default function Nav() {
  let name = "윤승환";
  let navigate = useNavigate();
  let state = useSelector((state) => {
    return state;
  });
  let user = useSelector((state) => state.user);
  let dispatch = useDispatch();
  console.log(state.user);
  console.log(state.data);

  const menu = (
    <Menu
      items={[
        {
          label: <span onClick={() => navigate("/Callendar")}>마을 일정 </span>,
        },
        {
          label: <span onClick={() => navigate("/Graph")}>통계 보기</span>,
          disabled: false,
        },
        {
          danger: true,
          label: "logout",
        },
      ]}
    />
  );
  return (
    <>
      <div className="Nav">
        <a>
          <span
            className="title"
            onClick={() => {
              navigate("/");
            }}
          >
            집켜줘
          </span>
        </a>
        {/* 관리자 페이지 만들어야함 */}
        <span
          className="User_name"
          onClick={() => {
            dispatch(changeName());
          }}
        >
          {state.user} 관리자
        </span>
        <Dropdown overlay={menu}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              더보기
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </>
  );
}
