// 基础模块
import React, { PureComponent } from 'react';

// 样式
import './App.css';


export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activePosition: null,
    };
    this.entrances = [
      {
        title: 'Admin',
        href: '/admin.html',
        img: require('./images/admin-logo.png'),
      },
      {
        title: 'React',
        href: '/react.html',
        img: require('./images/react-logo.png'),
      },
      {
        title: 'Vue',
        href: '/vue.html',
        img: require('./images/vue-logo.png'),
      }
    ];
  }

  onMouseOver = (event) => {
    const dom = {};
    for (const key in event.currentTarget) {
      dom[key] = event.currentTarget[key];
    }
    console.log('offsetTop', dom.offsetTop);
    console.log('offsetLeft', dom.offsetLeft);
  }

  render() {
    const { activePosition } = this.state;

    return (
      <div className="index">
        <ul className="index__entrance">
          {
            this.entrances.map((item, index) => (
              <li
                key={ index }
                className="index__entrance-item"
                onMouseOver={this.onMouseOver}
              >
                <a href={ item.href } className="index__entrance-link">
                  {
                    item.img
                      ? <img
                        src={ item.img }
                        alt={ item.title }
                        className="index__entrance-img"
                      />
                      : <span>{ item.title }</span>
                  }
                </a>
              </li>
            ))
          }
          <li className="index__entrance-active" style={activePosition ? {...activePosition} : null} />
        </ul>
      </div>
    );
  }
}