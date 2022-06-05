import React from "react";
import { Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./nav.css";
import { useNavigate } from "react-router-dom";

export default function Nav({ uid, username, role, townId }) {
  let navigate = useNavigate();
  const menu = (
    <Menu
      items={[
        {
        label: role && (
            <span
              onClick={() =>
                navigate("/Callendar", {
                  state: { uid:uid, townId: townId, name: username, role: role },
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
                  state: { uid:uid, townId: townId, name: username, role:role },
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
          <span className="title" onClick={()=>{
            if(role == "ROLE_USER"){
              navigate("/subpage",{
                state: { name: username, uid: uid, role: role },
              })
            } else{
              navigate("/main",{
                state: { name: username, uid: uid, role: role },
              })
            }
          }}>집켜줘</span>
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
