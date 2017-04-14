import React, { Component } from 'react';
import styled from 'styled-components';

import Sidebar from 'components/Sidebar';
import SearchInput from 'components/Search';
import EditableDiv from 'components/EditableDiv';
import TodoRow from 'components/TodoRow';
import { mainBG, lightGreyBorder, todoRowBorder } from 'global/colors';

const topMenuHeight = '46px';

const TopMenuBar = styled.div`
  display: flex;
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

const ContentBody = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 40px;
  background: ${mainBG};
`;

const ContentContainer = styled.div`
  min-width: 400px;
  max-width: 590px;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const TodoListWarpper = styled.div`
  border: 1px solid ${todoRowBorder};
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
        date: '2017-04-20T00:00:00Z',
        details: 'test details'
      },
      {
        id: 2,
        title: 'test 2',
        date: '2017-04-21T00:00:00Z',
        details: 'test details'
      },
      {
        id: 3,
        title: 'test 3',
        date: '2017-04-22T00:00:00Z',
        details: 'test details'
      }
    ];
  }

  render() {
    return (
      <div>
        <TopMenuBar>
          <Dummy />
          <MainTitle>Sick TODO</MainTitle>
          <SearchInputWrapper>
            <SearchInput />
          </SearchInputWrapper>
        </TopMenuBar>
        <ContentBody>
          {/* <Sidebar /> */}
          <ContentContainer>
            <EditableDiv />
            <TodoListWarpper>
              {this.todoMock.map(todo => <TodoRow key={todo.id} todo={todo} />)}
            </TodoListWarpper>
            <p className="App-intro">
              Testing...
            </p>
          </ContentContainer>
        </ContentBody>
      </div>
    );
  }
}

export default App;
