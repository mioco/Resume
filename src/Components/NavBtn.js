import React, { Component } from 'react';

class NavBtn extends Component {
  render() {
    return(
      <div className="resume-navBtn resume-side">
        <div><a href="https://github.com/mioco/Resume" target="_blank">简历源码</a></div>
        <div><a href="http://www.cnblogs.com/osyo/" target="_blank">博客园</a></div>
      </div>
    )
  }
}


export default NavBtn;