//基础模块
import React, { PureComponent } from 'react';

//第三方模块
// import { fromJS, is } from 'immutable';

//api
import { getUserList } from '@/api';

import { InputNumber, Button } from 'antd';

//组件
import CountTable from './CountTable';
// import EditableTable from './EditableTable';

//样式
import './style/Desktop.css';


export default class Desktop extends PureComponent {
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
            })(<InputNumber onChange={ this.varInputChange.bind(this, dataIndex, record) } />);
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
    this.getUserList();
  };
  
  updateTableData = (key, value, record) => {
    let data = JSON.parse(JSON.stringify(this.state.data));
    
    data.map(table => {
      const index = table.dataSource.findIndex(item => item[key] === value);
      if (index > -1) table.dataSource.splice(index, 1, record);
      return table;
    });
    return data;
  };
  
  varInputChange = (key, record, value) => {
    record[ key ] = value;
    this.setState({ data: this.updateTableData('id', record.id, record) });
  };
  
  getUserList = async function () {
    this.setState({ loading: true });
    await getUserList({ page: 1, size: 2 }).then(response => {
      console.log('user list', response);
      if (response.success && response.code === '200') {
        const array01 = JSON.parse(JSON.stringify(response));
        const array02 = JSON.parse(JSON.stringify(response));
        const array03 = JSON.parse(JSON.stringify(response));
        const array04 = JSON.parse(JSON.stringify(response));
        const array05 = JSON.parse(JSON.stringify(response));
        this.setState({
          data: response.data.map((table, index) => ({
            title: [
              { label: '所在组', value: 'XXXXXX' },
              { label: '管理员', value: 'Admin' },
              { label: '创建时间', value: new Date().format('yyyy-MM-dd hh:mm:ss') },
            ],
            dataSource: response.data.map((item, j) => ({ ...item, id: (Math.random()).toString() })),
          }))
        });
      };
    }, console.error);
    this.setState({ loading: false });
  };
  
  validate = () => {
    let isPass = true;
    let forms = this.CountTable.current.forms;
    const validate = (error, values) => {
      if (error) isPass = false;
    };
    
    for (let key in forms) {
      forms[key].validateFields(validate);
    };
    if (isPass) {
      console.log('saved');
    };
  };

  render () {
    const { data, loading, columns, footer } = this.state;

    return (
      <div>
        <Button type="primary" onClick={ this.validate }>验证</Button>
        <CountTable
          ref={ this.CountTable }
          data={ data }
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