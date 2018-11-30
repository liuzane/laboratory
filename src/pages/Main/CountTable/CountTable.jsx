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

let forms = {};

const CountTableRow = ({ form, index, ...props }) => {
  const key = props['data-row-key'];
  console.log(key, props, 53);
  if (key) forms[key] = form;
  return (
    <CountTableContext.Provider value={ form }>
      <tr { ...props } />
    </CountTableContext.Provider>
  );
};

const CountTableFormRow = Form.create()(CountTableRow);

class CountTableCell extends PureComponent {
  render () {
    const { validate, dataIndex, record, children, ...props } = this.props;
    if (typeof validate !== 'function' && validate !== undefined) {
      console.error('[ Validate Error ]: validate must is function!');
    };

    return (
      <td { ...props }>
        {
          validate ? (
            <CountTableContext.Consumer>
              {
                form => {
                  return (
                    <FormItem>
                      { validate(form.getFieldDecorator, dataIndex, record) }
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
};

export default class CountTable extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
    loading: PropTypes.bool,
    rowKey: PropTypes.string,
    footer: PropTypes.array,
    scroll: PropTypes.object,
    className: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: '',
  };
  
  constructor (props) {
    super(props);
    this.forms = forms;
  };

  render () {
    const { data, loading, rowKey, scroll, footer } = this.props;
    const columns = this.props.columns.map(col => ({
      ...col,
      onCell: record => ({
        record,
        dataIndex: col.dataIndex,
        validate: col.validate,
      })
    }));
    let [ loadingComponent, footerComponent ] = [ null, null ];

    if (loading) {
      loadingComponent = (
        <div className="count-table__loading">
          <Spin spinning tip="请稍后..." size="large" />
        </div>
      );
    };

    if (footer && data.length > 0) {
      footerComponent = (
        <div className="count-table__footer">
          {
            footer.map((item, index) => {
              let rowData = [];
              data.forEach(table => {
                table.dataSource.forEach(row => {
                  rowData.push(item.dataIndex ? row[ item.dataIndex ] : row);
                });
              });

              return (
                <div 
                  key={ index } 
                  className="count-table__footer-cell" 
                  style={{ 
                    width: typeof item.width === 'number' ? item.width + 'px' : item.width, 
                    textAlign: item.align, 
                  }}
                >
                  { item.render(rowData) }
                </div>
              )
            })
          }
        </div>
      );
    };
  
    const components = {
      body: {
        row: CountTableFormRow,
        cell: CountTableCell,
      },
    };

    return (
      <Style className="count-table">
        { loadingComponent }

        {
          data.map((table, index) => {
            let title = null;
            if (table.title) {
              title = () => (
                <div className="count-table__title">
                  {
                    table.title.map((item, i) => (<span key={ i }>{ item.label }：{ item.value }</span>))
                  }
                </div>
              );
            };

            return (
              <Table 
                className="count-table__body" 
                key={ index }
                components={ components }
                onRow={ (record, index) => ({ index: record[rowKey], rowId: record[rowKey] }) }
                bordered 
                dataSource={ table.dataSource } 
                columns={ columns } 
                size="small" 
                rowKey={ rowKey } 
                scroll={ scroll } 
                title={ title }
                pagination={ false } 
              />
            );
          })
        }

      { footerComponent }
      </Style>
    );
  };
};