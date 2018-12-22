import React, { Component } from 'react';
import './subnav.css';
class SubNav extends Component {
  render() {
    // 因为我要实现点击 Button 组件修改 SubNav 组件的 state
    // 但是这两个组件是毫不相关的(兄弟)
    // 所以将 SubNav 组件的 state 写到 app 组件中(状态提升)
    // 将 app 中的状态要传递给 SubNav 组件，使用 props
    // 为什么要提升到父组件? 由于子组件可以修改父组件的状态,那么 Button 组件可以修改 App 的状态，进而也就修改了 SubNav 的 props。
    // 子组件如何修改父组件的state
    // 1.在父组件内部声明修改 state 的方法
    // 2.将该方法当做props传递给子组件，让子组件执行
    const { show } = this.props;
    return (
      <div
        className="sub-nav"
        style={{ left: show ? '0px' : '-200px' }}
        onClick={event => {
          event.stopPropagation();
        }}
      >
        <h1>我的简历</h1>
        <ul>
          <li>
            <a href="http://baidu.com">个人资料</a>
          </li>
          <li>
            <a href="http://baidu.com">个人资料</a>
          </li>
          <li>
            <a href="http://baidu.com">个人资料</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SubNav;
