import React, { Component } from 'react';
import styled from 'styled-components';

const EditableDivWrapper = styled.div`
  width: 100%;
  padding: 10px 12px;
  border-radius: 5px 5px 0 0;
  background: #EAF8FD;
  overflow: hidden;
  box-sizing: border-box;
`;

const EditableDiv = styled.div`
  float: right;
  width: 508px;
  min-height: ${props => props.editingMode ? '60px' : 'auto'};
  padding: 8px 10px;
  background: white;
  border: 1px solid #CBEFFB;
  border-radius: 3px;
  line-height: 18px;
  color: #2FC2EF;
  font-size: 12px;

  &:focus {
    outline: none;
  }
`;

const HiddenTextArea = styled.textarea`
  display: none;
`;

const FormButtonsWrapper = styled.div`
  clear: both;
  display: block;
  padding-top: 5px;
  display: ${props => props.editingMode ? 'block' : 'none'};
`;

const Button = styled.button`
  float: right;
  color: white;
  font-size: 14px;
  padding: 8px 18px;
  background: rgba(47,194,239,.8);
  border-radius: 5px;
  border-style: none;
  cursor: pointer;
  opacity:

  &:hover {
    background: #2FC2EF;
  }
`;

export default class AddTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = { editingMode: false, value: '' };

    this.enterEditingMode = this.enterEditingMode.bind(this);
    this.enterWaitingMode = this.enterWaitingMode.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  enterEditingMode() {
    if (!this.state.editingMode) {
      this.setState(prevState => ({ editingMode: true }));
    }
  }

  enterWaitingMode() {
    if (this.state.editingMode && !this.state.value.length) {
      this.setState(prevState => ({ editingMode: false }));
    }
  }

  inputHandler(e) {
    this.setState({ value: e.target.innerText });
  }

  render() {
    return (
      <EditableDivWrapper>
        <form>
          <div>
            <EditableDiv
              contentEditable={true}
              suppressContentEditableWarning={true}
              editingMode={this.state.editingMode}
              onFocus={this.enterEditingMode}
              onBlur={this.enterWaitingMode}
              onInput={this.inputHandler}
              value={this.state.value}
              data-placeholder="Enter your plan" />
            <HiddenTextArea />
          </div>
          <FormButtonsWrapper editingMode={this.state.editingMode}>
            <Button
              editingMode={this.state.editingMode}
              disabled={this.state.value.length > 0 ? 'false' : 'true'}>
              Add
            </Button>
          </FormButtonsWrapper>
        </form>
      </EditableDivWrapper>
    );
  }
};
