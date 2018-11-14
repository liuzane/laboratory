//基础模块
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

//第三方模块
import styled from 'styled-components';

//UI组件库
import { Table } from 'antd';

const EditableRow = ({ ...props }) => {
  return (<tr { ...props } />);
};

const EditableCell = ({ one, ...props }) => {
  console.log(one, props, 17)
  return (<td { ...props }>{ props.children }</td>);
};


class EditableTable extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
    loading: PropTypes.bool,
    rowKey: PropTypes.string,
    scroll: PropTypes.object,
    className: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: '',
  };

  render () {
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };

    const {
      data,
      loading,
      rowKey,
      scroll,
    } = this.props;

    const columns = this.props.columns.map((col) => {
      console.log(col, 52)
      return {
        ...col,
        onCell: record => ({
          record,
          box: col.one,
        }),
      };
    });

    return (
      <Table
        components={ components }
        rowClassName="editable-row" 
        bordered 
        dataSource={ data } 
        columns={ columns } 
        loading={ loading } 
        rowKey={ rowKey } 
        scroll={ scroll } 
      />
    );
  };
};

export default EditableTable;