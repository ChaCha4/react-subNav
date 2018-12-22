import React, { Component } from 'react';
import Button from './Button/Button';
import SubNav from './subNav/SubNav';
import Main from './Main/Main';

class App extends Component {
  state = {
    show: false
  };
  render() {
    const { show } = this.state;
    return (
      <div onClick={this.closeSide}>
        {/* 以props将方法传递给子组件button */}
        <Button change={this.alterClick} show={show} />
        <SubNav show={show} />
        <Main show={show} />
      </div>
    );
  }
  // 在父组件内定义修改show状态的方法
  alterClick = () => {
    this.setState({
      show: true
    });
  };
  closeSide = event => {
    const eleClassName = event.target.className;
    // 1.给 app 绑定点击事件，只要点击的不是 button 按钮就隐藏
    // 2.给 sub-nav 绑定点击事件，作用是阻止 app 的点击事件触发，由于 sub-nav 里面的内容很多，通过event.target.className 无法判断是否点击的是 sub-nav 或者是里面的内容。
    if (eleClassName !== 'btn') {
      this.setState({
        show: false
      });
    }
  };
}

export default App;
