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
    let infoChunk = this.props.state.info.map((i, index) => {
      return <List key={ index } className={ i.className } icon={ i.icon } title={ i.title } content={ i.content }/>;
    })
    return(
      <div className="resume-container" ref="resumeContainer">
        <Info />
        { infoChunk }
        <Experience exp={ this.props.state.work } title="实习经历"/>
        <Experience exp={ this.props.state.exp } title="项目经历"/>
      </div>
    )
  }
}

let Info = () => (
  <div className="resume-info">
    <div>
      <p><i className="iconfont icon-email"></i> : mioco1997@gmail.com</p>
      <p><i className="iconfont icon-20140914071624460easyiconnet48"></i> : 17621752019</p>
      <p><i className="iconfont icon-github"></i> : <a href="https://github.com/mioco">https://github.com/mioco</a></p>
      <p><i className="iconfont icon-mycenter"></i> : <a href="https://osyox.com">https://osyox.com</a></p>
    </div>
    <div>
      <h1>黄诗雨</h1>
    </div>
    <div className="clear"></div>
  </div>
)

let List = ({className, icon, title, content}) => {
  let pList = content.map((c, index) => {
    return (
      <div key={ index }>
        <span>{Object.keys(c)}</span> : 
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

let Experience = ({exp, title}) => {
  let expList = exp.map((i, index) => {
    return <ExpChunk key={index} title={ i.title } content={ i.content } toUrl={ i.url } time={ i.time }/>
  })
  return(
    <div className="resume-infoChunk resume-exp">
      <div className='resume-infoChunk-title'>
        <h2>{ title }</h2>
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