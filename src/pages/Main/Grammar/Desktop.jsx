//基础模块
import React, { PureComponent } from 'react';


class Desktop extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {};
  };

  componentDidMount () {

  };

  render () {
    const { className, style } = this.props;
    
    return (
      <h1 className={ className } style={ style }>
        Grammar
      </h1>
    );
  };
}

export default Desktop;