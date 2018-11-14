//基础模块
import React, { Component } from 'react';

//第三方模块
import { fromJS, is } from 'immutable';

//api
import { getUserList } from '@/api';

//组件
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
          one: 'one',
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
    };
  };

  componentDidMount () {
//     let array = { list: [
//       { id: '1', value: 1 },
//       { id: '2', value: 2 },
//       { id: '3', value: 3 },
//       { id: '4', value: 4 },
//     ]};
// let prop = 'list.2.value';
//     // console.log(array['2'], 68);
//     let params = [ 'list', '2', 'value' ];

//     for (let i = 0; i < params.length; i ++) {
//       if (params[i] in array) {
//         array = array[params[i]];
//       };
//     };
// console.log(array, 76);
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
    const { 
      data, 
      loading, 
      columns, 
    } = this.state;

    return (
      <div>
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