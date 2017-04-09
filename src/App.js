import React, { Component } from 'react';
import styled from 'styled-components';

const TopMenuBar = styled.div`
  height: 46px;
  border-bottom: 1px solid rgba(0,0,0,0.15);
`;

class App extends Component {
  render() {
    return (
      <div>
        <TopMenuBar>
          {/* <MenuBlock /> */}
          hello
        </TopMenuBar>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
