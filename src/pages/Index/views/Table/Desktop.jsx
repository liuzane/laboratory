// 基础模块
import React, { PureComponent } from 'react';

// api
import api, { axios } from '@/api';

// UI组件库
import { message, Table } from 'antd';

// 布局组件
import { LayContainer } from '@/layouts/LayMain';


class Desktop extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
    };
    this.source = axios.CancelToken.source();
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
    this.getListPersons();
  }

  componentWillUnmount() {
    this.source.cancel();
  }

  getListPersons = () => {
    this.setState({ loading: true });
    api.getListPersons({ page: 1, size: 2 }, { cancelToken: this.source.token }).then(
      response => {
        this.setState({ loading: false, data: response.data });
      },

      error => {
        if (!axios.isCancel(error)) {
          message.error(error.message);
          this.setState({ loading: false });
        }
      }
    );
  };

  render () {
    const { columns } = this;
    const { data, loading } = this.state;

    return (
      <LayContainer>
        <Table
          className="desktop-table"
          columns={ columns }
          dataSource={ data }
          loading={ loading }
          onChange={
            (pagination, filters, sorter) => {
              console.log(filters);
            }
          }
          rowKey="id"
          size="small"
        />
      </LayContainer>
    );
  }
}

export default Desktop;