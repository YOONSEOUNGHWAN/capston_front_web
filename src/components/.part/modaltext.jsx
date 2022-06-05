import React, { useRef, useState } from "react";
import { Modal, Button, Input, Radio } from "antd";
import axios from "axios";

export default function ModalText({ townId, text }) {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState(text);
  const { TextArea } = Input;
  const [value, setValue] = useState("");
  const [contents, setContents] = useState("");

  const showModal = () => {
    setVisible(true);
  };
  const onChange = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    setValue(e.target.value);
  };
  const textChange = (e) => {
    e.preventDefault();
    setContents(e.target.value);
  };

  const textRef = useRef();

  const handleOk = () => {
    setModalText("전송중...");
    setConfirmLoading(true);
    console.log(value, contents, townId);

    const data = {
      townId: townId,
      target: value,
      content: contents,
    };
    axios
      .post("/api/message", data)
      .then((res) => {
        setTimeout(() => {
          setVisible(false);
          setConfirmLoading(false);
          setModalText(text);
        }, 2000);
      })
      .catch((e) => {
        alert("다시요청!");
      });
  };

  const handleCancel = () => {
    setVisible(false);
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
        <Radio.Group defaultValue="p" value={value} onChange={onChange}>
          <Radio.Button value="p">보호자 전송</Radio.Button>
          <Radio.Button value="m">관리자 전송</Radio.Button>
          <Radio.Button value="a">전체 전송</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Input showCount maxLength={20} placeholder="제목을 입력하세요" />
        <br />
        <br />
        <TextArea showCount maxLength={100} onChange={textChange} />
      </Modal>
    </>
  );
}
