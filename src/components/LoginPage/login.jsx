import React, { useRef } from "react";
import Nav from "../.part/nav";
import { Form, Input, Button, Checkbox } from "antd";

import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login({ authService }) {
  const idRef = useRef();
  const pwRef = useRef();

  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const goToMain = (uid) => {
    navigate("/main", {
      state: { id: uid },
    });
  };
  const Login = (event) => {
    event.preventDefault();
    console.log(idRef.current.input.value);
    console.log(pwRef.current.input.value);

    // authService //
    // // 해당 함수에 id및 pw 입력
    //   .login()
    //   .then((data) => goToMain(data.user.uid));
  };

  return (
    <>
      {/* <Nav /> */}
      <div className="Nav">
        <span
          className="title"
          onClick={() => {
            navigate("/");
          }}
        >
          집켜줘
        </span>
      </div>
      <section className="login">
        <ul className="login_list">
          <li className="login_item">
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input ref={idRef} />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password ref={pwRef} />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit" onClick={Login}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </li>
        </ul>
      </section>
    </>
  );
}
