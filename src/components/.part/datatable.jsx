import React, { useState } from "react";
import { Table } from "antd";
import { useQuery } from "react-query";
import axios from "axios";

export default function DataTable({ townId }) {
  const [data, setData] = useState([]);

  if (townId) {
    useQuery(
      "messagedata",
      () => {
        axios
          .get(`/api/message/${townId}`)
          .then((res) => {
            let update = [...res.data.data];
            update = update.map(({ id: key, ...rest }) => ({ key, ...rest }));
            setData(update);
          })
          .catch((e) => {
            console.log(e);
          });
      },
      [townId]
    );
  } else {
    useQuery(
      "messagedata",
      () => {
        axios
          .get("/api/message")
          .then((res) => {
            let update = [...res.data.data];
            update = update.map(({ id: key, ...rest }) => ({ key, ...rest }));
            setData(update);
          })
          .catch((e) => {
            console.log(e);
          });
      },
      [townId]
    );
  }

  const columns = [
    {
      title: "날짜",
      dataIndex: "time",
      sorter: {
        compare: (a, b) => 1,
        multiple: 1,
      },
    },
    {
      title: "내용",
      dataIndex: "content",
    },
    {
      title: "target(p=보호자, m=관리자, a=전체)",
      dataIndex: "target",
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
