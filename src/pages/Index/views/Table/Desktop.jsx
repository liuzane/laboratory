// 基础模块
import React, { PureComponent } from 'react';

// api
import { getUserList } from '@/api';

import { message, Table } from 'antd';


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
    await getUserList({ page: 1, size: 2 }).then(
      response => {
        this.setState({ data: response.data });
      },

      error => {
        message.error(error.message);
      }
    );
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
          size="small"
        />
      </div>
    );
  }
}