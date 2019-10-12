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

  renderRoutes = (routes) => {
    return routes.map((item, index) => {
      const restProps = {
        key: index,
        path: item.path,
        exact: item.exact,
        strict: item.strict,
      };
      if (item.component && item.children) {
        return (
          <Route { ...restProps }>
            <item.component>
              { this.renderRoutes(item.children) }
            </item.component>
          </Route>
        );
      } else {
        return (
          <Route
            { ...restProps }
            render={
              props => item.redirect
                ? (<Redirect to={ item.redirect } />)
                : (<item.component { ...props } routes={ item.children } />)
            }
          />
        );
      }
    });
  };

  render() {
    return (
      <Switch>
        { this.renderRoutes(this.props.routes) }
      </Switch>
    );
  }
}

export default withRouter(RouterView);