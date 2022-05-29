import React, { useState } from "react";
import { Table, Tag, Space } from "antd";
import { useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Tablelist({ townId, townName }) {
  const [townList, setTownList] = useState([]);
  const navigate = useNavigate();
  if (townId) {
    useQuery(
      "towndata",
      () => {
        axios
          .get(`/api/terminal/${townId}`)
          .then((res) => {
            let array = [...res.data.data];
            array = array.map(({ id: key, ...rest }) => ({ key, ...rest }));
            setTownList(array);
          })
          .catch((e) => {
            console.log(e);
          });
      },
      [townId]
    );
  } else {
    useQuery(
      "towndata",
      () => {
        axios
          .get("/api/terminal")
          .then((res) => {
            let array = [...res.data.data];
            array = array.map(({ id: key, ...rest }) => ({ key, ...rest }));
            setTownList(array);
          })
          .catch((e) => {
            console.log(e);
          });
      },
      [townId]
    );
  }

  // console.log(result.data)
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a
            onClick={() =>
              navigate("/user", {
                state: { userdata: text, townName: townName },
              })
            }
          >
            {record.name} 더보기
          </a>
          <a
            onClick={() => {
              // console.log(text.key);
              axios
                .delete(`/api/terminal/${text.key}`)
                .then((res) => {
                  alert("삭제완료");
                })
                .catch((e) => {
                  alert("삭제실패");
                });
            }}
          >
            삭제
          </a>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={townList} />;
    </>
  );
}
