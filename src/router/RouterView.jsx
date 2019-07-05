// 基础模块
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// 路由模块
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

// 第三方模块
import { fromJS, is } from 'immutable';


class RouterView extends PureComponent {
  static propTypes = {
    routes: PropTypes.array,
    onRouterEach: PropTypes.func,
  };

  static defaultProps = {
    onRouterEach: () => {},
  };

  componentDidMount() {
    const [ to, from ] = [ {}, this.props.location ];

    this.props.onRouterEach(to, from, this.props.history);
  }
  
  componentDidUpdate(nextProps, nextState) {
    const [ to, from ] = [ nextProps.location, this.props.location ];

    if (!is(fromJS(to), fromJS(from))) {
      this.props.onRouterEach(to, from, this.props.history);
    }
  }

  render() {
    return (
      <Switch>
        {
          this.props.routes.map((item, index) => (
            <Route 
              exact={ item.exact } 
              key={ index }
              path={ item.path } 
              render={ 
                props => item.redirect 
                ? (<Redirect to={ item.redirect } />) 
                : (<item.component { ...props } routes={ item.children } />) 
              } 
              strict={ item.strict } 
            />
          ))
        }
      </Switch>
    );
  }
}

export default withRouter(RouterView);