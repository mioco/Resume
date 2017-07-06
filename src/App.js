import React, { Component } from 'react';
import Resume from './Components/Resume';
import NavBtn from './Components/NavBtn';
import DownloadBtn from './Components/DownloadBtn';
import './style/app.css';

class App extends Component {
  render() {
    return(
      <div>
        <DownloadBtn />
        <Resume state={ this.props.state } />
        <NavBtn download={ this.download } />
      </div>
    )
  }
}

export default App;