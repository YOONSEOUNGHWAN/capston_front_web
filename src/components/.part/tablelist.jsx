import React, { useState } from "react";
import { Table, Tag, Space } from "antd";
import { useQuery } from "react-query";
import axios from "axios";

export default function Tablelist({ townId }) {
  const [townList, setTownList] = useState([]);
  let result = useQuery("towndata", () => {
    axios
      .get(`/api/terminal/${townId}`)
      .then((res) => {
        let array = [...res.data.data];
        array = array.map(({ id: key, ...rest }) => ({ key, ...rest }));
        setTownList(array);
        console.log(townList);
      })
      .catch((e) => {
        console.log(e);
      });
  });

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
    // {
    //   title: "Tags",
    //   key: "tags",
    //   dataIndex: "tags",
    //   render: (tags) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? "geekblue" : "green";
    //         if (tag === "loser") {
    //           color = "volcano";
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              // console.log(text)
            }}
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

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      phone: "1234",
      tags: ["nice", "developer"],
    },

    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "4",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "5",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "6",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "7",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "8",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "9",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "10",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={townList} />;
    </>
  );
}
