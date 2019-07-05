// 基础模块
import React, { PureComponent } from 'react';

// 第三方模块
// import { fromJS, is } from 'immutable';

// api
import { getUserList } from '@/api';

import { Table } from 'antd';


export default class Desktop extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
    };
  
    this.columns = [
      {
        title: 'Name',
        align: 'center',
        dataIndex: 'name',
        filters: [{
          text: 'London',
          value: 'London',
        }, {
          text: 'New York',
          value: 'New York',
        }],
        filterMultiple: false,
      },
    
      {
        title: 'Age',
        align: 'center',
        dataIndex: 'age',
        sorter: (a, b) => {
          console.log('商品数量排序', a, b);
        },
      },
    
      {
        title: 'Address',
        align: 'center',
        dataIndex: 'address',
      },
    
      {
        title: 'Action',
        align: 'center',
        render: (text, record, index) => {
          return (
            <div className="btns">
              <button onClick={ this.test }>Check</button>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          );
        },
      },
    ];
  }

  componentDidMount () {
    this.getUserList();
  }

  getUserList = async function () {
    this.setState({ loading: true });
    await getUserList({ page: 1, size: 2 }).then(response => {
      // console.log('user list', response);
      if (response.success && response.code === '200') {
        // this.setState({
        //  data: response.data.map((table, index) => ({
        //    title: [
        //      { label: '所在组', value: 'XXXXXX' },
        //      { label: '管理员', value: 'Admin' },
        //      { label: '创建时间', value: new Date().toDateString() },
        //    ],
        //    dataSource: response.data.map((item, j) => ({ ...item })),
        //    key: index,
        //  }))
        // });
        console.log(response.data);
        this.setState({ data: response.data });
      }
    }, console.error);
    this.setState({ loading: false });
  };

  render () {
    const { data, loading } = this.state;

    return (
      <div>
        <Table
          className="desktop-table"
          columns={ this.columns }
          dataSource={ data }
          loading={ loading }
          onChange={(pagination, filters, sorter) => {
            console.log(filters);
          }}
          rowKey="id"
        />
      </div>
    );
  }
}