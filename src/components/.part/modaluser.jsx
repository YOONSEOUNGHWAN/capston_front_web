import React, { useRef } from "react";
import { Modal, Button, Input, Form } from "antd";
import axios from "axios";

export default function ModalUser({ text, townId }) {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState(text);

  let nameRef = useRef();
  let phoneRef = useRef();
  let addressRef = useRef();
  let protectorNameRef = useRef();
  let protectorPhoneRef = useRef();

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
    };
    console.log(
      `사용자 정보 ${data.townId} ${data.name} ${data.address} ${data.phone}`
    );
    axios
      .post(`/api/terminal`, data)
      //해당 사용자의 정보를 list로 받아오기에 가장 최근 정보를 가져와서 세팅해줘야함.
      .then((res) => {
        return res.data.data.at(-1).id;
      })
      .then((terminalId) => {
        let protector = {
          townId: townId,
          terminalId: terminalId,
          name: protectorNameRef.current.input.value,
          phone: protectorPhoneRef.current.input.value,
        };
        console.log(
          `사용자 정보 ${protector.townId} ${protector.terminalId} ${protector.phone} ${protector.name}`
        );

        axios.post(`/api/protector`, protector).then((res) => {
          alert("전송완료");
        });
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
        <h2> • 단말기 사용자 정보</h2>

        <Form.Item label="사용자 이름">
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

        <Form.Item label="사용자 주소">
          <Input
            showCount
            //maxLength={11}

            placeholder="주소를 입력해주세요"
            ref={addressRef}
          />
        </Form.Item>

        <br />
        <h2> • 보호자 정보</h2>
        <Form.Item label="보호자 이름">
          <Input
            showCount
            maxLength={10}
            placeholder="이름을 입력해주세요"
            ref={protectorNameRef}
          />
        </Form.Item>

        <Form.Item label="보호자 전화번호">
          <Input
            showCount
            maxLength={13}
            placeholder="01012345678('-'제거)"
            ref={protectorPhoneRef}
          />
        </Form.Item>
      </Modal>
    </>
  );
}
