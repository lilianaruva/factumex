import React, { useState, useRef } from "react";
import { Form, Input, Button, Layout, Row, Col, Card } from "antd";
const { Content } = Layout;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const submitHandler = async () => {
    console.log(emailRef.current.input.value);
    console.log(passwordRef.current.input.value);
    setLoading(true);
  };

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Content style={{ margin: "auto", verticalAlign: "middle" }}>
          <Row>
            <Col style={{ alignItems: "center", justifyItems: "center" }}>
              <div
                className="site-card-border-less-wrapper"
                style={{ paddingTop: "50px" }}
              >
                <Card
                  title="Login to React App"
                  bordered={true}
                  style={{ width: 450 }}
                >
                  <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Email"
                      rules={[
                        { required: true, message: "Please input your email!" },
                      ]}
                    >
                      <Input
                        type="email"
                        name="email"
                        ref={emailRef}
                        value={user.email}
                        onChange={handleInput}
                      />
                    </Form.Item>

                    <Form.Item
                      label="Password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input
                        type="password"
                        name="password"
                        ref={passwordRef}
                        value={user.password}
                        onChange={handleInput}
                      />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <Button
                        type="primary"
                        onClick={() => submitHandler()}
                        loading={loading}
                      >
                        Sign In
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default Login;
