import React, { useEffect, useRef, useState } from "react";
import { Modal, Button, Input, Cascader, Form } from "antd";
import axios from "axios";

export default function ModalManager({ text }) {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState(text);
  const [townList, setTownList] = useState([]);
  const [townId, setTownId] = useState();
  useEffect(() => {
    axios
      .get("/api/town")
      .then((res) => {
        return res.data.data;
      })
      .then((townList) => {
        // value가 key역할을 함/ 여기서는 townId로 사용될 것임.
        const options = townList.map((item, i) => {
          return { value: item.id, label: item.town_name, key: i };
        });
        setTownList(options);
      })
      .catch((e) => {
        alert("다시요청!");
      });
  }, []);

  let nameRef = useRef();
  let emailRef = useRef();
  let addressRef = useRef();
  let phoneRef = useRef();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("전송중...");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      setModalText(text);
    }, 2000);
    let data = {
      townId: townId,
      name: nameRef.current.input.value,
      phone: phoneRef.current.input.value,
      address: addressRef.current.input.value,
      email: emailRef.current.input.value,
    };
    console.log(
      `사용자 정보 ${data.phone} ${data.username} ${data.address} ${data.email} ${data.townId}`
    );
    axios
      .post("/api/manager/", data)
      .then((res) => {
        alert("관리자 추가 성공");
      })
      .catch((e) => {
        alert("다시요청!");
      });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onChange = (e) => {
    setTownId(e[0]);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {modalText}
      </Button>
      <Modal
        title={modalText}
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <h2> • 마을 관리자 추가</h2>
        <Form.Item label="기존 마을선택">
          <Cascader
            options={townList}
            placeholder="마을선택"
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item label="마을 관리자 이름">
          <Input
            showCount
            maxLength={10}
            placeholder="이름을 입력해주세요"
            ref={nameRef}
          />
        </Form.Item>

        <Form.Item label="사용자 전화번호">
          <Input
            showCount
            maxLength={13}
            placeholder="01012345678('-'제거)"
            ref={phoneRef}
          />
        </Form.Item>

        <Form.Item label="사용자 Email">
          <Input showCount placeholder="**** @ ****" ref={emailRef} />
        </Form.Item>

        <Form.Item label="관리자 주소지">
          <Input
            showCount
            maxLength={10}
            placeholder="주소를 입력해주세요"
            ref={addressRef}
          />
        </Form.Item>
      </Modal>
    </>
  );
}
