import React, { Component } from 'react';

class PdfIframe extends Component {
  render() {
    return(
      <iframe className="resume-pdfIframe" ref="resumePdfIframe">
      </iframe>
    )
  }
}


export default PdfIframe;