import React, { Component } from 'react';
import styled from 'styled-components';

import SearchInput from 'components/Search';
import MainContainer from 'containers/MainContainer';
import { lightGreyBorder } from 'global/colors';

const topMenuHeight = '46px';

const TopMenuBar = styled.div`
  display: flex;
  height: ${topMenuHeight};
  border-bottom: 1px solid ${lightGreyBorder};
`;

const Nav = styled.div`
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
        details: 'test details',
        completed: false,
        menuOpen: false
      },
      {
        id: 2,
        title: 'test 3',
        date: '2017-04-22T00:00:00Z',
        details: 'test details',
        completed: true,
        menuOpen: false
      },
      {
        id: 3,
        title: 'test 2',
        date: '2017-04-21T00:00:00Z',
        details: 'test details',
        completed: false,
        menuOpen: false
      },
      {
        id: 4,
        title: 'test 3',
        date: '2017-04-22T00:00:00Z',
        details: 'test details',
        completed: false,
        menuOpen: false
      },
      {
        id: 5,
        title: 'test 3',
        date: '2017-04-22T00:00:00Z',
        details: 'test details',
        completed: true,
        menuOpen: false
      }
    ];
  }

  render() {
    return (
      <div>
        <TopMenuBar>
          <Nav>
            <span>List View</span>
            <span>Block View</span>
          </Nav>
          <MainTitle>Sick TODO</MainTitle>
          <SearchInputWrapper>
            <SearchInput />
          </SearchInputWrapper>
        </TopMenuBar>
        <MainContainer todos={this.todoMock} />
      </div>
    );
  }
}

export default App;
