import React from "react";
import { Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

import "./nav.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../assets/store";

export default function Nav({ username, role }) {
  let navigate = useNavigate();
  let state = useSelector((state) => {
    return state;
  });
  let user = useSelector((state) => state.user);

  const check = role === "ROLE_USER" ? true : false
  const menu = (
    <Menu
      items={[
        {
          label: check && <span onClick={() => navigate("/Callendar")}>마을 일정 </span>,
          disabled: false,
        },
        {
          label: <span onClick={() => navigate("/Graph")}>통계 보기</span>,
          disabled: false,
        },
        {
          danger: true,
          label: <span onClick={() => navigate("/")}>logout</span>,
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
        <span className="User_name">{username} 관리자</span>
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
