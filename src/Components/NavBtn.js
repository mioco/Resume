import React, { Component } from 'react';

class NavBtn extends Component {
  render() {
    return(
      <div className="resume-navBtn resume-side">
        {/*<div onClick={ window.print } className="resume-app-btn"><i className="iconfont icon-ttpodicon"></i></div>*/}
        <div onClick={ window.print } className="resume-app-btn"><i className="iconfont icon-pdf1"></i></div>
        <div href="" className="resume-app-btn"></div>
      </div>
    )
  }
}


export default NavBtn;