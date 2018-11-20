//基础模块
import React, { Component } from 'react';

//第三方模块
import { fromJS, is } from 'immutable';

//api
import { getUserList } from '@/api';

//组件
import CountTable from './CountTable';
import EditableTable from './EditableTable';

//样式
import './style/Desktop.css';


class Desktop extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      columns: [
        {
          title: 'Name',
          align: 'center',
          dataIndex: 'name',
        },

        {
          title: 'Age',
          align: 'center',
          dataIndex: 'age',
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
                <button>Check</button>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            );
          },
        },
      ],
      footer: [
        {
          // align: 'center',
          dataIndex: 'age',
          render: (rowData) => {
            return '年龄：' + rowData.reduce((pervious, current) => pervious + current);
            // return '年龄'
          },
        },

        {
          width: '100px',
          // align: 'center',
          dataIndex: 'address',
          render: (rowData) => {
            console.log(rowData, 72);
            return '合计';
          },
        },
      ],
    };
  };

  componentWillMount () {
    this.setState({ loading: true });
    getUserList({ page: 1, size: 2 }).then(response => {
      // console.log(response, 62);
      this.setState({ data: response, loading: false });
    }, error => {
      console.error(error);
      this.setState({ loading: false });
    });
  };

  shouldComponentUpdate (nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  };

  render () {
    const { data, loading, columns, footer } = this.state;
    const dataSource = data.map(item => ({
      title: [ 
        { label: '采购单号', value: 'XXXXXX' }, 
        { label: '客户', value: '西西' }, 
        { label: '最后入库时间', value: '2018-11-11 00:41:00' }, 
      ],
      dataSource: data,
    }));

    return (
      <div>
        {/*<CountTable 
          data={ dataSource } 
          loading={ loading } 
          columns={ columns } 
          footer={ footer } 
          rowKey="id" 
        />*/}

        <EditableTable 
          data={ data } 
          loading={ loading } 
          columns={ columns } 
          rowKey="id" 
        />
      </div>
    );
  };
};

export default Desktop;