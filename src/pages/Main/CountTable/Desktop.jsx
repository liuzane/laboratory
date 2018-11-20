//基础模块
import React, { Component } from 'react';

//第三方模块
import { fromJS, is } from 'immutable';

//api
import { getUserList } from '@/api';

import { InputNumber, Button } from 'antd';

//组件
import CountTable from './CountTable';
// import EditableTable from './EditableTable';

//样式
import './style/Desktop.css';
import Mock, {Random} from "mockjs";


export default class Desktop extends Component {
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
          validate: (getFieldDecorator, dataIndex, record) => {
            return getFieldDecorator(dataIndex, {
              rules: [
                { required: true, message: '请输入年龄', },
              ],
              initialValue: record[ dataIndex ],
            })(<InputNumber />);
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
      ],
      footer: [
        {
          width: '100px',
          // align: 'center',
          dataIndex: 'address',
          render: (rowData) => {
            console.log(rowData, 72);
            return '合计';
          },
        },
        
        {
          // align: 'center',
          dataIndex: 'age',
          render: (rowData) => {
            return '年龄：' + rowData.reduce((pervious, current) => pervious + current);
            // return '年龄'
          },
        },
      ],
    };
    
    this.CountTable = React.createRef();
  };

  componentDidMount () {
    this.setState({ loading: true });
    getUserList({ page: 1, size: 2 }).then(response => {
      // console.log(response, 62);
      this.setState({ data: response, loading: false });
    }, error => {
      console.error(error);
      this.setState({ loading: false });
    });
    
    // setTimeout(() => {
    //   this.setState({
    //     data: Array.apply(null, { length: 2 }).map((item, index) => ({
    //       name: 'xxxx',
    //       age: 20,
    //       address: '中华人民共和国',
    //     })),
    //     loading: false,
    //   });
    // }, 2000);
  };

  shouldComponentUpdate (nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  };
  
  validate = () => {
    console.log(this.CountTable.current.forms, 107);
    let forms = this.CountTable.current.forms;
    for (let key in forms) {
      forms[key].validateFields((error, values) => {
      
      });
    };
  };

  render () {
    const { data, loading, columns, footer } = this.state;
    const dataSource = data.map((table, index) => ({
      title: [ 
        { label: '所在组', value: 'XXXXXX' },
        { label: '管理员', value: 'Admin' },
        { label: '创建时间', value: new Date().format('yyyy-MM-dd hh:mm:ss') },
      ],
      dataSource: data.map((item, j) => ({ ...item, id: (Math.random()).toString() })),
    }));

    return (
      <div>
        <Button type="primary" onClick={ this.validate }>验证</Button>
        <CountTable
          ref={ this.CountTable }
          data={ dataSource }
          loading={ loading }
          columns={ columns }
          footer={ footer }
          rowKey="id"
        />
        
        {/*<EditableTable */}
          {/*data={ data } */}
          {/*loading={ loading } */}
          {/*columns={ columns } */}
          {/*rowKey="id" */}
        {/*/>*/}
      </div>
    );
  };
};