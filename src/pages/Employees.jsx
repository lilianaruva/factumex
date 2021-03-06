import React, { useRef, useState, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Row, Col, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { rdxuploadsactions } from "../reducers/upload";
import Highlighter from "react-highlight-words";
import FormModal from "../components/FormModal";
import moment from "moment";

const Employees = () => {
 //dispatch
  const dispatch = useDispatch();
  //states
  const [data, setData] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  let modalVisible = useSelector((state) => state.uploadReducer.modalEmployee);
  const searchInput = useRef(null);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const request = () => {
    fetch(
      "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/liliana_gallegos",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result.data.employees))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    request();
  }, [modalVisible]);

  useEffect(() => {
    request();
  }, []);

  function onCancel() {
    dispatch(rdxuploadsactions.changeModalState({ modalEmployee: false }));
  }

  const onModalVisible = () => {
    dispatch(rdxuploadsactions.changeModalState({ modalEmployee: true }));
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Clean
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "33.33%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Lastname",
      dataIndex: "last_name",
      key: "last_name",
      width: "33.33%",
      ...getColumnSearchProps("last_name"),
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
      render: (birthday) => {
        var time = birthday;
        var date = new Date(time);
        return <p>{moment(date).format("YYYY/MM/DD")}</p>;
      },
    },
  ];

  return (
    <>
      <div className="employeesPage">
        <div className="employees-top">
          <h1>Employees</h1>
          <button className="buttonUpload" onClick={onModalVisible}>
            Add Employee
          </button>
        </div>
        <Row>
          <Col span={24}>
            <Table
              columns={columns}
              dataSource={data}
              pagination={{
                pageSize: 10,
              }}
            />
          </Col>
        </Row>
      </div>
      <Modal
        title="Add New Employee"
        visible={modalVisible}
        onCancel={onCancel}
        className="modalStyle"
        maskClosable={false}
        destroyOnClose={true}
        footer={null}
      >
        <FormModal />
      </Modal>
    </>
  );
};

export default Employees;
