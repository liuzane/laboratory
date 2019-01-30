//基础模块
import React, { PureComponent } from 'react';

//公共组件
import HighlightCode from '@/components/HighlightCode';

//样式
import './style/Grammar.css';

const code = `
//这是这个页面的代码

//基础模块
import React, { PureComponent } from 'react';

//公共组件
import HighlightCode from '@/components/HighlightCode';

//样式
import './style/Grammar.css';

const code = //你所看到的代码字符串;


class Desktop extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.Grammar = React.createRef();
  };

  componentDidMount() {

  };
  
  handleRefs = () => {
    console.log(this.Grammar);
  };

  render() {
    const { className, style } = this.props;
    
    return (
      <h1 className={ className } style={ style } ref={ this.Grammar }>
        <button onClick={ this.handleRefs }>Grammar</button>
        <HighlightCode code={ code } />
      </h1>
    );
  };
}

export default Desktop;
`;


class Desktop extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.Grammar = React.createRef();
  };

  componentDidMount() {

  };
  
  handleRefs = () => {
    console.log(this.Grammar);
  };

  render() {
    const { className, style } = this.props;
    
    return (
      <h1 className={ className } style={ style } ref={ this.Grammar }>
        <button onClick={ this.handleRefs }>Grammar</button>
        <HighlightCode code={ code } />
      </h1>
    );
  };
}

export default Desktop;