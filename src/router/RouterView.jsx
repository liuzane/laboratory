//基础模块
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

//路由模块
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

//第三方模块
import { fromJS, is } from 'immutable';


class RouterView extends PureComponent {
  static propTypes = {
    routes: PropTypes.array,
    onBeforeEach: PropTypes.func,
  };

  static defaultProps = {
    onBeforeEach: () => {},
  };

  componentWillReceiveProps (nextProps) {
    const [ to, from ] = [ nextProps.location, this.props.location ];
    if (!is(fromJS(this.props), fromJS(nextProps))) {
      this.props.onBeforeEach(to, from, this.props.history);
    };
  };

  render () {
    return (
      <Switch>
        {
          this.props.routes.map((item, index) => (
            <Route 
              exact={ item.exact } 
              strict={ item.strict }
              path={ item.path } 
              render={ 
                props => item.redirect 
                ? (<Redirect to={ item.redirect } />) 
                : (<item.component { ...props } routes={ item.children } />) 
              } 
              key={ index } 
            />
          ))
        }
      </Switch>
    );
  };
};

export default withRouter(RouterView);