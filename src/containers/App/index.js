import React, { Component } from 'react';
import styled from 'styled-components';

import FlexContainer from 'components/FlexContainer';
import Sidebar from 'components/Sidebar';
import SearchInput from 'components/Search';
import EditableDiv from 'components/EditableDiv';
import TodoRow from 'components/TodoRow';
import { mainBG, lightGreyBorder } from 'global/colors';

const topMenuHeight = '46px';

const TopMenuBar = styled.div`
  height: ${topMenuHeight};
  border-bottom: 1px solid ${lightGreyBorder};
`;

const Dummy = styled.div`
  width: 40%;
  height: ${topMenuHeight};
`;

const MainTitle = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${topMenuHeight};
`;

const MainContentBody = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 40px;
  background: ${mainBG};
`;

const ContentWrapper = styled.div`
  width: 890px;
  margin: 0 auto;
`;

const TodoListWarpper = styled.div`
  float: right;
  margin: 0 auto;
  width: 590px;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  width: 33%;
  height: ${topMenuHeight};
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
          <ContentWrapper>
            <FlexContainer direction="row">
              <Dummy />
              <MainTitle>Sick TODO</MainTitle>
              <SearchInputWrapper>
                <SearchInput />
              </SearchInputWrapper>
            </FlexContainer>
          </ContentWrapper>
        </TopMenuBar>
        <MainContentBody>
          <ContentWrapper>
            <Sidebar />
            <TodoListWarpper>
              <EditableDiv />
              {this.todoMock.map(todo => <TodoRow key={todo.id} todo={todo} />)}
              <p className="App-intro">
                Testing...
              </p>
            </TodoListWarpper>
          </ContentWrapper>
        </MainContentBody>
      </div>
    );
  }
}

export default App;
