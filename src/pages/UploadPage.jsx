import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Upload, Col, Row, List, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { rdxuploadsactions } from "../reducers/upload";
const { Dragger } = Upload;

const UploadPage = () => {
  let showPhotos = useSelector((state) => state.uploadReducer.photos);
  const [fileList, setFileList] = useState([]);
  //dispatch
  const dispatch = useDispatch();

  const props = {
    name: "file",
    multiple: true,
    accept: ".png,.jpeg,.jpg",
    listType: "picture",

    beforeUpload() {
      return false;
    },

    onChange({ fileList: newFileList }) {
      setFileList(newFileList);
    },

    onDrop(e) {
      console.log("Dropped files");
    },
  };

  const Save = () => {
    fileList?.map((file) => {
      dispatch(rdxuploadsactions.addPhoto({ photos: file }));
    });
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

        <Row>
          <List
            grid={{
              gutter: 16,
              column: 3,
            }}
            dataSource={showPhotos}
            renderItem={(item) => (
              <List.Item>
                <Image width={200} src={item?.thumbUrl} alt={item?.uid} />
              </List.Item>
            )}
          />
        </Row>
      </div>
    </>
  );
};

export default UploadPage;
