import React, { Component } from 'react';
import { TimelineMax, Linear } from 'gsap';
import '../style/button.css';

class DownloadBtn extends Component {
  rippleAnimation(event, timing) {
    let ripple = this.refs.jsRipple;
    let tl           = new TimelineMax(),
        x            = event.nativeEvent.offsetX,
        y            = event.nativeEvent.offsetY,
        w            = event.target.offsetWidth,
        h            = event.target.offsetHeight,
        offsetX      = Math.abs( (w / 2) - x ),
        offsetY      = Math.abs( (h / 2) - y ),
        deltaX       = (w / 2) + offsetX,
        deltaY       = (h / 2) + offsetY,
        scale_ratio  = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    tl.fromTo(ripple, timing, {
      x: x,
      y: y,
      transformOrigin: '50% 50%',
      scale: 0,
      opacity: 1,
      ease: Linear.easeIn
    },{
      scale: scale_ratio,
      opacity: 0
    });
    return tl;
  }
  create_wave (event) {
    event.persist();
    this.rippleAnimation(event, 0.75);
  }
  render() {
    return(
      <div id="downloadPDF">
        <div style={{height: 0, width: 0, position: 'absolute', visibility: 'hidden'}} aria-hidden="true">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" focusable="false">
            <symbol id="ripply-scott" viewBox="0 0 100 100">
              <circle id="ripple-shape" cx="1" cy="1" r="1" />
            </symbol>
          </svg>
        </div>
        <a href="./osyoResume.pdf" target="_blank" className="downloadBtn styl-material" onMouseOver={this.create_wave.bind(this)}>
          Download PDF
          <svg className="ripple-obj" id="js-ripple">
            <use height="100" width="100" xlinkHref="#ripply-scott" ref="jsRipple"></use>
          </svg>
        </a>
      </div>
    )
  }
}


export default DownloadBtn;