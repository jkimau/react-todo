import React, { Component } from 'react';
import styled from 'styled-components';

import FlexContainer from 'components/FlexContainer';
import Search from 'components/Search';
import TodoRow from 'components/TodoRow';
import { mainBG, lightGreyBorder } from 'global/colors';

const TopMenuBar = styled.div`
  height: 46px;
  border-bottom: 1px solid ${lightGreyBorder};
`;

const Dummy = styled.div`
  width: 30%;
`;

const MainTitle = styled.div`
  flex-grow: 1;
`;

const MainContentBody = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${mainBG};
`;

const MainContentWrapper = styled.div`
  margin: 0 auto;
  width: 590px;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.todoMock = [
      {
        id: 1,
        title: 'test 1',
        date: '2017-4-20T00:00:00Z',
        details: 'test details'
      },
      {
        id: 2,
        title: 'test 2',
        date: '2017-4-21T00:00:00Z',
        details: 'test details'
      },
      {
        id: 3,
        title: 'test 3',
        date: '2017-4-22T00:00:00Z',
        details: 'test details'
      }
    ];
  }

  render() {
    return (
      <div>
        <TopMenuBar>
          <FlexContainer direction="row">
            <Dummy />
            <MainTitle>Sick TODO</MainTitle>
            <Search width="30%" test="test" />
          </FlexContainer>
        </TopMenuBar>
        <MainContentBody>
          <MainContentWrapper>
            {this.todoMock.map(todo => <TodoRow key={todo.id} todo={todo} />)}
          </MainContentWrapper>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </MainContentBody>
      </div>
    );
  }
}

export default App;
