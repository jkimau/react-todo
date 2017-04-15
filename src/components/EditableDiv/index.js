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

const EditableDivision = styled.div`
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

const DummyDiv = styled.div`

`;

export default class EditableDiv extends Component {
  constructor(props) {
    super(props);

    this.state = { editingMode: false };
    this.enterEditingMode = this.enterEditingMode.bind(this);
    this.enterWaitingMode = this.enterWaitingMode.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  enterEditingMode() {
    if (!this.state.editingMode) {
      this.setState(prevState => ({ editingMode: true }));
    }
  }

  enterWaitingMode() {
    if (this.state.editingMode) {
      this.setState(prevState => ({ editingMode: false }));
    }
  }

  validateForm() {
    console.log('ad');
  }

  render() {
    return (
      <EditableDivWrapper>
        <form>
          <div>
            <EditableDivision
              contentEditable={true}
              suppressContentEditableWarning={true}
              onFocus={this.enterEditingMode}
              onBlur={this.enterWaitingMode}
              editingMode={this.state.editingMode}
              onKeyPress={this.validateForm}
              data-placeholder="adsfafd">
              {/* <DummyDiv><br/></DummyDiv> */}
              <div><br/></div>
            </EditableDivision>
            <HiddenTextArea />
          </div>
          <FormButtonsWrapper editingMode={this.state.editingMode}>
            <Button editingMode={this.state.editingMode}>Add</Button>
          </FormButtonsWrapper>
        </form>
      </EditableDivWrapper>
    );
  }
};
