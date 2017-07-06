import React, { Component } from 'react';
import Resume from './Components/Resume';
import NavBtn from './Components/NavBtn';
import DownloadBtn from './Components/DownloadBtn';
//import PdfIframe from './Components/PdfIframe';
import './style/app.css';

class App extends Component {
  render() {
    return(
      <div>
        <DownloadBtn />
        <Resume state={ this.props.state } />
        <NavBtn download={ this.download } />
        {/*<PdfIframe ref="pdfIframe"/>*/}
      </div>
    )
  }
}

export default App;