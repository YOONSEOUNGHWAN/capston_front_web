import React from "react";
import { Modal, Button, Input, Select, Cascader, DatePicker, Form } from "antd";
const {RangePicker} = DatePicker;

export default function ModalEvent(props) {
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
    console.log("Change:", e[0]._d);
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
        <RangePicker onChange={onChange}/>
        <br />

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
    </>
  );
}
