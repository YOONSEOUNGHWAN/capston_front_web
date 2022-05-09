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
        <Form.Item label="도시선택">
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
        <br />
        <Form.Item label="날짜">
          <DatePicker />
        </Form.Item>
        <br />
        <Input
          showCount
          maxLength={20}
          onChange={onChange}
          placeholder="제목을 입력하세요"
        />
        <br />
        <br />
        <TextArea showCount maxLength={100} onChange={onChange} />
      </Modal>
      <Input placeholder="Basic usage" />
    </>
  );
}
