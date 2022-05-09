import React from "react";
import { Modal, Button, Input, Select, Cascader, DatePicker, Form } from "antd";

export default function ModalUser(props) {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState(props.text);
  const { TextArea } = Input;
  const { Option } = Select;

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("전송중...");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      setModalText(props.text);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  const options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            {
              value: "xihu",
              label: "West Lake",
            },
          ],
        },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [
            {
              value: "zhonghuamen",
              label: "Zhong Hua Men",
            },
          ],
        },
      ],
    },
  ];

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
        <Form.Item label="마을선택">
          <Input.Group compact>
            <Select style={{ width: "30%" }} defaultValue="Home">
              <Option value="Home">Home</Option>
              <Option value="Company">Company</Option>
            </Select>
            <Cascader
              style={{ width: "70%" }}
              options={options}
              placeholder="Select Address"
            />
          </Input.Group>
        </Form.Item>

        <Form.Item label="사용자 이름">
          <Input
            showCount
            maxLength={10}
            onChange={onChange}
            placeholder="이름을 입력해주세요"
          />
        </Form.Item> 

        <Form.Item label="사용자 전화번호">
          <Input
            showCount
            maxLength={13}
            onChange={onChange}
            placeholder="010-XXXX-XXXX"
          />
        </Form.Item>

        <Form.Item label="사용자 주소">
          <Input
            showCount
            //maxLength={11}
            onChange={onChange}
            placeholder="주소를 입력해주세요"
          />
        </Form.Item>

        <br/>
        <h2> • 보호자 정보</h2>
        <Form.Item label="보호자 이름">
          <Input
            showCount
            maxLength={10}
            onChange={onChange}
            placeholder="이름을 입력해주세요"
          />
        </Form.Item>

        <Form.Item label="보호자 전화번호">
          <Input
            showCount
            maxLength={13}
            onChange={onChange}
            placeholder="010-XXXX-XXXX "
          />
        </Form.Item>
      </Modal>
    </>
  );
}
