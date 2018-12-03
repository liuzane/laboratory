//基础模块
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//路由模块
import { HashRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

//路由配置
import routes, { RouterView } from '@/router';

//第三方模块
import NProgress from 'nprogress';

//全局样式
import '@/styles';

// import { languages } from '@/language';

// import one from 'one';

// console.log(languages, 20);



class App extends PureComponent {
  static propTypes = {
    update_user: PropTypes.func,
  };
  
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
    };
  };
  
  componentDidMount () {
    // console.log(this.props);
    // const { update_user } = this.props;
    // const closeLoading = () => {
      const screenLoading = document.getElementById('screen-loading');
      if (screenLoading) {
        document.body.removeChild(screenLoading);
      }
      // this.setState({ loading: false });
    // };
    //
    // update_user(
    //   { id: '1', username: 'admin' },
    //   closeLoading,
    //   error => {
    //     closeLoading();
    //
    //   }
    // );
  };
  
	onBeforeEach = (to, from, history) => {
    // NProgress.start();
	};
  
  onAfterEach = (to, from, history) => {
    // setTimeout(NProgress.done, 300);
    // NProgress.done();
  };

  render() {
    return (
      <Router>
        <RouterView 
        	routes={ routes } 
        	onBeforeEach={ this.onBeforeEach }
          onAfterEach={ this.onAfterEach }
        />
      </Router>
    );
  };
};
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  const { update_user } = dispatch.user;
  return {
    update_user,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);