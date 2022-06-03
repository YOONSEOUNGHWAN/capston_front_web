import React from "react";
import { Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./nav.css";
import { useNavigate } from "react-router-dom";

export default function Nav({ username, role, townId }) {
  let navigate = useNavigate();
  const menu = (
    <Menu
      items={[
        {
          label: role && (
            <span
              onClick={() =>
                navigate("/Callendar", {
                  state: { townId: townId, name: username, role: role },
                })
              }
            >
              마을 일정
            </span>
          ),
          disabled: false,
        },
        {
          label: (
            <span
              onClick={() =>
                navigate("/Graph", {
                  state: { townId: townId, name: username, role },
                })
              }
            >
              통계 보기
            </span>
          ),
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
          <span className="title">집켜줘</span>
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
