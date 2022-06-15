import React, { useRef, useState, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Row, Col, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { rdxuploadsactions } from "../reducers/upload";
import Highlighter from "react-highlight-words";
import FormModal from "../components/FormModal";

const Employees = () => {
  /*const data = [
    {
      key: "31",
      name: "John",
      lastname: "Brown",
      date: "1998/10/15",
    },
    {
      key: "32",
      name: "Joe",
      lastname: "Black",
      date: "1997/01/05",
    },
    {
      key: "33",
      name: "Jim",
      lastname: "Green",
      date: "1985/12/25",
    },
    {
      key: "34",
      name: "Jim",
      lastname: "Red",
      date: "1982/09/06",
    },
    {
      key: "21",
      name: "John",
      lastname: "Brown",
      date: "1998/10/15",
    },
    {
      key: "22",
      name: "Joe",
      lastname: "Black",
      date: "1997/01/05",
    },
    {
      key: "23",
      name: "Jim",
      lastname: "Green",
      date: "1985/12/25",
    },
    {
      key: "24",
      name: "Jim",
      lastname: "Red",
      date: "1982/09/06",
    },
    {
      key: "11",
      name: "John",
      lastname: "Brown",
      date: "1998/10/15",
    },
    {
      key: "12",
      name: "Joe",
      lastname: "Black",
      date: "1997/01/05",
    },
    {
      key: "13",
      name: "Jim",
      lastname: "Green",
      date: "1985/12/25",
    },
    {
      key: "14",
      name: "Jim",
      lastname: "Red",
      date: "1982/09/06",
    },
  ];*/
  //dispatch
  const dispatch = useDispatch();
  //states
  const [data, setData] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  let modalVisible = useSelector((state) => state.uploadReducer.modalEmployee);
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  function onCancel() {
    dispatch(rdxuploadsactions.changeModalState({ modalEmployee: false }));
  }

  const onModalVisible = () => {
    dispatch(rdxuploadsactions.changeModalState({ modalEmployee: true }));
  };

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    fetch(
      "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/liliana_gallegos",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

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
      dataIndex: "lastname",
      key: "lastname",
      width: "33.33%",
      ...getColumnSearchProps("lastname"),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      ...getColumnSearchProps("date"),
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
