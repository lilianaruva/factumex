import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Upload, Col, Row } from "antd";
const { Dragger } = Upload;

const UploadPage = () => {
  const [fileList, setFileList] = useState([]);

  const props = {
    name: "file",
    multiple: true,
    accept: ".png,.jpeg,.jpg",
    listType: "picture",

    onChange({ fileList: newFileList }) {
      setFileList(newFileList);
    },

    onDrop(e) {
      console.log("Dropped files");
    },
  };

  const Save = () => {
    console.log("save");
  };

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
        <button className="buttonUpload" onClick={Save}>
          Save
        </button>
      </div>
      <Row></Row>
    </>
  );
};

export default UploadPage;
