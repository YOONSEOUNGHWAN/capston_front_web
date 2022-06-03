import React, { useRef } from "react";
import { Form, Input, Button, Checkbox } from "antd";

import "./login.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function Login() {
  const idRef = useRef();
  const pwRef = useRef();

  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const Login = (event) => {
    event.preventDefault();
    const data = {
      userId: idRef.current.input.value,
      password: pwRef.current.input.value,
    };
    axios
      .post("/api/auth/signin", data)
      .then((res) => {
        const role = res.data.data.role;
        const username = res.data.data.username;
        const uid = res.data.data.id;
        if (role === "ROLE_USER") {
          navigate("/subpage", {
            state: { name: username, uid: uid, role: role },
          });
        } else {
          navigate("/main", {
            state: { name: username, uid: uid, role: role },
          });
        }
      })
      .catch((e) => {
        alert("다시요청!");
      });
  };

  return (
    <>
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
