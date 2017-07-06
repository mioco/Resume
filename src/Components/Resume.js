import React, { Component } from 'react';
import '../style/resume.css';


class Resume extends Component {
  componentDidMount() {
    Array.from(this.refs.resumeContainer.children).forEach((ele, index) => {
      setTimeout(() => {
        ele.classList.add('played')
      }, 150 * index);
    })
  }
  render() {
    let infoChunk = [];
    let key = 1;
    this.props.state.info.forEach((i) => {
      infoChunk.push(<List key={ key++ } className={ i.className } icon={ i.icon } title={ i.title } content={ i.content }/>);
    })
    return(
      <div className="resume-container" ref="resumeContainer">
        <Info />
        { infoChunk }
        <Experience exp={ this.props.state.exp }/>
      </div>
    )
  }
}

let Info = () => (
  <div className="resume-info">
    <div>
      <p><i className="iconfont icon-email"></i> : mioco1997@gmail.com</p>
      <p><i className="iconfont icon-qq"></i> : 819705364</p>
      <p><i className="iconfont icon-20140914071624460easyiconnet48"></i> : 17768101090</p>
      <p><i className="iconfont icon-github"></i> : <a href="https://github.com/mioco">https://github.com/mioco</a></p>
    </div>
    <div>
      <h1>黄诗雨</h1>
    </div>
    <div className="clear"></div>
  </div>
)

let List = ({className, icon, title, content}) => {
  let pList = [];
  let key = 1;
  content.forEach((c) => {
    pList.push(
      <div key={ key++ }>
        <span dangerouslySetInnerHTML={{ __html: Object.values(c) }}></span>
      </div>
    );
  })
  return(
    <div className={ 'resume-infoChunk resume-' + className }>
      <div className='resume-infoChunk-title'>
        <h2>{ title }</h2>
        <hr/>
      </div>
      <div className='resume-infoChunk-body'>
        { pList }
      </div>
    </div>
  )
}

let Experience = (exp) => {
  let expList = [];
  let key = 1;
  exp.exp.forEach((i) => {
    expList.push(<ExpChunk key={key++} title={ i.title } content={ i.content } toUrl={ i.url } time={ i.time }/>)
  })
  return(
    <div className="resume-infoChunk resume-exp">
      <div className='resume-infoChunk-title'>
        <h2>项目经历</h2>
        <hr/>
      </div>
      { expList }
    </div>
  )
}

let ExpChunk = ({ title, time, toUrl, content}) => (
  <div className="resume-exp-item">
    <div className="resume-exp-item-title">
      <span>{ time }</span>
      <h3><i className={ toUrl ? "iconfont icon-url" : ""}></i><a href={ toUrl }>{ title }</a></h3>
      <div className="clear"></div>
    </div>
    <p dangerouslySetInnerHTML={{__html: content}}></p>
  </div>
)
export default Resume;