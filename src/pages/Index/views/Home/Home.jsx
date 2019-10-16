// 基础模块
import React, { PureComponent } from 'react';

// api
import api, { axios } from '@/api';

// 样式
import './style/Home.less';

// UI组件库
import { message } from 'antd';


class Home extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.source = axios.CancelToken.source();
  }

  componentDidMount () {
    console.log(123);
    // this.getHeweaterByType();
  }

  getHeweaterByType = () => {
    const params = {
      type: 'now',
      location: 'chaoyang,beijing',
      key: '81c887d621274b71ad5e694d0f6e94c4',
    };
    this.setState({ loading: true });
    api.getHeweaterByType(params, { cancelToken: this.source.token }).then(
      response => {
        console.log('response', response);
        this.setState({ loading: false });
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
    return (
      <div className="home">
        <ul className="home-container">
          <li className="home-block"></li>
          <li className="home-block"></li>
          <li className="home-block"></li>
          <li className="home-block"></li>
        </ul>
      </div>
    );
  }
}

export default Home;