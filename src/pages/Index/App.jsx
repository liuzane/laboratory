// 基础模块
import React, { PureComponent } from 'react';

// 样式
import './App.css';


export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.entrances = [
      {
        title: 'Admin',
        href: '/admin.html',
        img: '',
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

  render() {
    return (
      <div className="index">
        <ul className="index__entrance">
          {
            this.entrances.map((item, index) => (
              <li key={ index } className="index__entrance-item">
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
        </ul>
      </div>
    );
  }
}