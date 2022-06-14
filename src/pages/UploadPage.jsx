import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload, Col, Row } from "antd";
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  accept: ".png,.jpeg,.jpg",
  listType: "picture",
  beforeUpload(file) {
    console.log(file);
    return false;
  },

  onChange(info) {},

  onDrop(e) {
    console.log("Dropped files");
  },
};

const UploadPage = () => {
  return (
    <>
      <div className="draggerPage">
        <Row>
          <Col span={24}>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined style={{ color: "#eb2f96" }} />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files
              </p>
            </Dragger>
          </Col>
        </Row>
      </div>
      <Row></Row>
    </>
  );
};

export default UploadPage;
