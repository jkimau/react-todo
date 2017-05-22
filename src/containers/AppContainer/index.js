import React, { Component } from 'react';
import styled from 'styled-components';

import TopNavigation from 'components/TopNavigation';
import SearchInput from 'components/Search';
import { lightGreyBorder } from 'global/colors';
import { topMenuHeight } from 'global/variables';

const TopMenuBar = styled.div`
  display: flex;
  height: ${topMenuHeight};
  border-bottom: 1px solid ${lightGreyBorder};
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

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { viewMode: 'list' };
  }

  render() {
    return (
      <div onClick={this.documentClickHandler}>
        <TopMenuBar>
          <TopNavigation
            viewMode={this.state.viewMode}
            switchViewMode={this.switchViewMode} />
          <MainTitle>TODO</MainTitle>
          <SearchInputWrapper>
            <SearchInput />
          </SearchInputWrapper>
        </TopMenuBar>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default AppContainer;
