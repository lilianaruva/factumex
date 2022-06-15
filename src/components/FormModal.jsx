import React, { useEffect, useState } from "react";
import { Form, Row, Col, Input, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { rdxuploadsactions } from "../reducers/upload";

const FormModal = () => {
  //dispatch
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [userName, setUserName] = useState(true);

  const onFinish = (values) => {
    dispatch(rdxuploadsactions.changeModalState({ modalEmployee: false }));
  };

  function onChangeStarting(value, dateString) {
    console.log(dateString);
  }

  return (
    <>
      <Row>
        <Col span={24}>
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Row justify="center">
              <Col xs={24} md={24} className="input-space">
                <Form.Item
                  label="First name"
                  name="firstName"
                  style={{ marginBottom: "1rem" }}
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input size="large" className="fill-width"></Input>
                </Form.Item>
              </Col>
              <Col xs={24} md={24} className="input-space">
                <Form.Item
                  label="Last name"
                  name="lastName"
                  style={{ marginBottom: "1rem" }}
                  rules={[
                    { required: true, message: "Please input your last name!" },
                  ]}
                >
                  <Input size="large" className="fill-width"></Input>
                </Form.Item>
              </Col>
              <Col xs={24} md={24}>
                <Form.Item
                  label="Date"
                  name="date"
                  className="primary-label"
                  rules={[
                    {
                      required: true,
                      message: "Please input your birthday!",
                    },
                  ]}
                >
                  <DatePicker
                    className="date-picker"
                    onChange={onChangeStarting}
                    placeholder="2022/01/29"
                    size="large"
                    format="YYYY/MM/DD"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={24}>
                <button htmlType="submit" className="buttonModal">
                  Save
                </button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default FormModal;
