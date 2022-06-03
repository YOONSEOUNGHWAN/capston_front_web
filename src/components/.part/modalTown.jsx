import React, { useRef, useState } from "react";
import { Modal, Button, Input, Form, Radio } from "antd";
import axios from "axios";

export default function ModalTown({ text, townId }) {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState(text);

  const [role, setRole] = useState("");

  let nameRef = useRef();
  let emailRef = useRef();

  let townNameRef = useRef();

  let IdRef = useRef();
  let PwRef = useRef();
  let townAddressRef = useRef();

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
      userId: IdRef.current.input.value,
      username: nameRef.current.input.value,
      password: PwRef.current.input.value,
      email: emailRef.current.input.value,
      role: role,
    };
    console.log(
      `사용자 정보 ${data.userId} ${data.username} ${data.password} ${data.email} ${data.role}`
    );
    axios
      .post("/api/auth/signup", data)
      .then((res) => {
        return res.data.data.id;
      })
      .then((id) => {
        let town_data = {
          userId: id,
          town_name: townNameRef.current.input.value,
          town_address: townAddressRef.current.input.value,
          town_manager_name: nameRef.current.input.value,
          people_num: 0,
          communication_problems: 0,
          announce_num: 0,
          event_num: 0,
          emergency_num: 0,
          urgent_announce_num: 0,
        };
        console.log(
          `사용자 정보 ${town_data.userId} ${town_data.town_name} ${town_data.town_address} ${town_data.town_manager_name} ${town_data.people_num} ${town_data.communication_problems} ${town_data.announce_num} ${town_data.event_num} ${town_data.emergency_num} ${town_data.urgent_announce_num}`
        );
        axios.post("/api/town", town_data).then((res) => {
          alert("마을 생성 완료");
        });
      })
      .catch((e) => {
        alert("다시요청!");
      });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setRole(e.target.value);
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
        <h2> • 마을 관리자 정보</h2>

        <Form.Item label="마을 관리자 이름">
          <Input
            showCount
            maxLength={10}
            placeholder="이름을 입력해주세요"
            ref={nameRef}
          />
        </Form.Item>

        <Form.Item label="ID 생성">
          <Input
            showCount
            maxLength={10}
            placeholder="ID를 입력해주세요"
            ref={IdRef}
          />
        </Form.Item>

        <Form.Item label="PW 생성">
          <Input
            showCount
            maxLength={10}
            placeholder="PW를 입력해주세요"
            ref={PwRef}
            type="password"
          />
        </Form.Item>

        <Form.Item label="사용자 Email">
          <Input showCount placeholder="**** @ ****" ref={emailRef} />
        </Form.Item>

        <Radio.Group onChange={onChange}>
          <Radio.Button value="ROLE_USER">마을 관리자</Radio.Button>
          <Radio.Button value="ROLE_ADMIN" disabled>
            시스템 관리자
          </Radio.Button>
        </Radio.Group>

        <br />
        <br />
        <h2> • 마을 정보</h2>
        <Form.Item label="마을 이름">
          <Input
            showCount
            maxLength={10}
            placeholder="마을 이름을 등록해주세요"
            ref={townNameRef}
          />
        </Form.Item>

        <Form.Item label="마을 주소">
          <Input
            showCount
            maxLength={10}
            placeholder="마을 주소를 등록해주세요"
            ref={townAddressRef}
          />
        </Form.Item>
      </Modal>
    </>
  );
}
