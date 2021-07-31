// 基础模块
import React, { PureComponent } from 'react';


export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="index">
        <ul>
          <li>
            <a href="/admin.html">Admin</a>
          </li>
          <li>
            <a href="/react.html">React</a>
          </li>
          <li>
            <a href="/vue.html">Vue</a>
          </li>
        </ul>
      </div>
    );
  }
}