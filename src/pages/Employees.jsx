import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Row, Col } from "antd";
import Highlighter from "react-highlight-words";

const Employees = () => {
  const data = [
    {
      key: "31",
      name: "John",
      lastname: "Brown",
      date: "New York No. 1 Lake Park",
    },
    {
      key: "32",
      name: "Joe",
      lastname: "Black",
      date: "London No. 1 Lake Park",
    },
    {
      key: "33",
      name: "Jim",
      lastname: "Green",
      date: "Sidney No. 1 Lake Park",
    },
    {
      key: "34",
      name: "Jim",
      lastname: "Red",
      date: "London No. 2 Lake Park",
    },
    {
      key: "21",
      name: "John",
      lastname: "Brown",
      date: "New York No. 1 Lake Park",
    },
    {
      key: "22",
      name: "Joe",
      lastname: "Black",
      date: "London No. 1 Lake Park",
    },
    {
      key: "23",
      name: "Jim",
      lastname: "Green",
      date: "Sidney No. 1 Lake Park",
    },
    {
      key: "24",
      name: "Jim",
      lastname: "Red",
      date: "London No. 2 Lake Park",
    },
    {
      key: "11",
      name: "John",
      lastname: "Brown",
      date: "New York No. 1 Lake Park",
    },
    {
      key: "12",
      name: "Joe",
      lastname: "Black",
      date: "London No. 1 Lake Park",
    },
    {
      key: "13",
      name: "Jim",
      lastname: "Green",
      date: "Sidney No. 1 Lake Park",
    },
    {
      key: "14",
      name: "Jim",
      lastname: "Red",
      date: "London No. 2 Lake Park",
    },
  ];
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
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
            Reset
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
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Lastname",
      dataIndex: "lastname",
      key: "lastname",
      width: "20%",
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
          <button className="buttonUpload">Add Employee</button>
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
    </>
  );
};

export default Employees;
