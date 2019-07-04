// 基础模块
import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';

// 第三方模块
import styled from 'styled-components';

// UI组件库
import { Table } from 'antd';

const Style = styled.div`
  padding: 10px;

  .count-table__loading {
    text-align: center;
    padding: 30px 0;
  }

  .count-table__title > span {
    display: inline-block;
    padding: 0 10px;
    border-right: 3px solid #e8e8e8;
  }

  .count-table__title > span:last-child {
    border-right: none;
  }

  .count-table__body {
    margin-bottom: 10px;
  }

  .count-table__footer {
    display: table;
    width: 100%;
    border-radius: 4px;
    background-color: #e8e8e8;
  }

  .count-table__footer-cell {
    display: table-cell;
    padding: 8px 8px;
  }
`;

const Row = ({ form, index, ...props }) => {
  console.log(props, 47)
  return (
    <tr { ...props } />
  );
}

class Cell extends Component {
  render () {
    console.log(this.props, 52)
    return (
      <td { ...this.props }>{ this.props.children }</td>
    );
  };
};


class EditableTable extends Component {
  static propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
    loading: PropTypes.bool,
    rowKey: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: '',
  };

  render () {
    const components = {
      body: {
        row: Row,
        cell: Cell,
      },
    };

    const { data, columns, rowKey, loading } = this.props;

    return (
      <Table
        components={ components }
        bordered
        dataSource={ data }
        columns={ columns } 
        rowKey={ rowKey } 
        loading={ loading } 
        rowClassName="editable-row"
      />
    );
  };
};

export default EditableTable;