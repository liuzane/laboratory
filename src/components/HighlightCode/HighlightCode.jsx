// 基础模块
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// HighlightRegEx
import HighlightRegEx from './HighlightRegEx';


// 样式
import style from './style/HighlightCode.module.css';

const highlightCodeClassName = (postfix = '') => style['highlight-code' + postfix];


class HighlightCode extends PureComponent {
  static propTypes = {
    code: PropTypes.string,
  };
  
  constructor (props) {
    super(props);
    this.HighlightCode = React.createRef();
  }
  
  componentDidMount() {
    let htmlString = this.HighlightCode.current.innerHTML;
    this.HighlightCode.current.innerHTML = HighlightRegEx(htmlString);

    // let str = '<h1 className={ className } style={ style } ref={ this.Grammar }>\n' +
    //    '        <button onClick={ this.handleRefs }>Grammar</button>\n' +
    //    '        <HighlightCode code={ code } />\n' +
    //    '      </h1>';
    // str = str.replace(/(<|<\/)(\w{1,}).*?>/g, function () {
    //  // console.log(arguments, 31);
    // })
  }

  render() {
    return (
      <div className={ highlightCodeClassName() }>
        <pre className={ highlightCodeClassName('__pre') }>
          <code className={ highlightCodeClassName('__code') } ref={ this.HighlightCode }>
            { this.props.code }
          </code>
        </pre>
      </div>
    );
  }
}

export default HighlightCode;