//基础模块
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

//第三方模块
import styled from 'styled-components';

//UI组件库
import { Form, Table, Spin } from 'antd';

const FormItem = Form.Item;
const CountTableContext = React.createContext();

const Style = styled.div`
  padding: 10px;

  .count-table__loading {
    text-align: center;
    padding: 30px 0;
  }

  .ant-table-title,
  .count-table__title {
    background-color: #e8e8e8;
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
    margin-bottom: 25px;
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

let forms = {};


const CountTableRow = ({ form, index, ...props }) => {
  if (index) forms[index] = form;
  return (
    <CountTableContext.Provider value={ form }>
      <tr { ...props } />
    </CountTableContext.Provider>
  );
};


const CountTableFormRow = Form.create()(CountTableRow);


const CountTableCell = ({ validate, dataIndex, record, children, ...props }) => {
  if (typeof validate !== 'function' && validate !== undefined) {
    console.error('[ Validate Error ]: validate must is function!');
  }
  
  return (
    <td { ...props }>
      {
        validate ? (
          <CountTableContext.Consumer>
            {
              form => {
                return (
                  <FormItem>
                    { validate(form, dataIndex, record) }
                  </FormItem>
                );
              }
            }
          </CountTableContext.Consumer>
        ) : children
      }
    </td>
  );
};


const CountTableBody = ({ rowKey, ...restProps }) => {
  if (!rowKey) console.warn('[ CountTable rowKey Warn ]: rowKey is' + rowKey);
  
  const components = {
    body: {
      row: CountTableFormRow,
      cell: CountTableCell,
    },
  };
  
  return (
    <div className="count-table__body">
      <Table
        components={ components }
        onRow={ (record, index) => ({ index: record[rowKey] }) }
        bordered
        size="small"
        pagination={ false }
        rowKey={ rowKey }
        { ...restProps }
      />
    </div>
  );
};


const CountTableBodyTitle = ({ title }) => {
  if (!title || !(title instanceof Array)) {
    console.warn('[ CountTable Warn ]: title must is array!');
    return null;
  }
  
  return (
    <div className="count-table__title">
      {
        title.map((item, i) => (<span key={ i }>{ item.label }：{ item.value }</span>))
      }
    </div>
  );
};


const CountTableBodyFooter = ({ footer, dataSource }) => {
  if (!footer || !(footer instanceof Array)) {
    console.warn('[ CountTable Warn ]: footer must is array!');
    return null;
  }
  
  const handleRowData = (data, item) => {
    let rowData = [];
    
    data.forEach(row => {
      if (row.dataSource && row.dataSource.length > 0) {
        rowData = rowData.concat(handleRowData(row.dataSource, item));
      } else {
        rowData.push(item.dataIndex ? row[ item.dataIndex ] : row);
      }
    });
    
    return rowData;
  };
  
  return (
    <div className="count-table__footer">
      {
        footer.map((item, index) => {
          return (
            <div
              key={ index }
              className="count-table__footer-cell"
              style={{
                width: typeof item.width === 'number' ? item.width + 'px' : item.width,
                textAlign: item.align,
              }}
            >
              { item.render(handleRowData(dataSource, item)) }
            </div>
          )
        })
      }
    </div>
  );
};


export default class CountTable extends PureComponent {
  static propTypes = {
    multiple: PropTypes.bool,
    data: PropTypes.array,
    columns: PropTypes.array,
    title: PropTypes.array,
    footer: PropTypes.array,
    loading: PropTypes.bool,
    rowKey: PropTypes.string,
    scroll: PropTypes.object,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  
  static defaultProps = {
    multiple: true,
    className: '',
  };
  
  constructor (props) {
    super(props);
    this.forms = forms;
  };
  
  render () {
    const { multiple, data, loading, footer, ...restProps } = this.props;
    const columns = restProps.columns.map(col => ({
      ...col,
      onCell: record => ({
        record,
        dataIndex: col.dataIndex,
        validate: col.validate,
      })
    }));
    delete restProps.columns;
    let loadingComponent, footerComponent;
    
    if (loading) {
      loadingComponent = (
        <div className="count-table__loading">
          <Spin spinning tip="请稍后..." size="large" />
        </div>
      );
    };
    
    if (footer && data.length > 0) {
      footerComponent = (
        <CountTableBodyFooter footer={ footer } dataSource={ data } />
      );
    };
    
    return (
      <Style className="count-table">
        { loadingComponent }
        
        {
          multiple
            ? data.map((table, index) => {
              const title = table.title ? () => (<CountTableBodyTitle title={ table.title } />) : null;
              
              return (
                <CountTableBody
                  key={ index }
                  dataSource={ table.dataSource }
                  columns={ columns }
                  title={ title }
                  { ...restProps }
                />
              );
            })
            : (
              <CountTableBody
                dataSource={ data }
                columns={ columns }
                { ...restProps }
              />
            )
        }
        
        { footerComponent }
      </Style>
    );
  };
};