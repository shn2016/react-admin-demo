/**
 * Created by hao.cheng on 2017/4/15.
 */
import React from 'react';
import { Table, Row, Select, Input, Col, Icon, Button } from 'antd';

const ALL = 'ALL';
const { Option } = Select;

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <span>{text}</span>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 33,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}];



class BasicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: data,
      keyword: '',
    }
  }

  onFilterChange = ( value ) => {
    const dataSource = (value === ALL) ? data : data.filter(item => item.age == value);
    this.setState({
      dataSource,
    })
  }

  onKeywordChange = ( value ) => {
    this.setState({
      keyword: value,
    })
  }

  contains(key, item) {
    let result = false;
    Object.values(item).forEach(v => {
      if(v.toString().toLowerCase().includes(key.toLowerCase())) {
        result = true;
      }
    });
    return result;
  }

  onSearch = () => {
    const { keyword } = this.state
    const dataSource = [];
    data.forEach(item => {
      if(this.contains(keyword, item)) {
        dataSource.push(item);
      }
    });
    this.setState({
      dataSource
    })
  }

  render() {
    const { dataSource } = this.state;

    return (
      <div>
        <Row>
          <Col span={4}>
            <Select
              showSearch
              defaultValue={ALL}
              onChange={this.onFilterChange}
            >
              <Option value={ALL}>{ALL}</Option>
              {data.map(item => (
                <Option key={item.age}>{item.age}</Option>
              ))}
            </Select>
          </Col>
          <Col span={12}>
            <Input
              placeholder="请输入关键词"
              onChange={e => this.onKeywordChange(e.target.value)}
            />
          </Col>
          <Col span={4}>
            <Button type="primary" onClick={this.onSearch}>搜索</Button>
          </Col>
        </Row>
        <Table columns={columns} dataSource={dataSource} />
      </div>
    )
  }
}

export default BasicTable;