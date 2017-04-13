import React from 'react';
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

const TextArea = styled.textarea`
  display: none;
`;

export default () => {
  return (
    <EditableDivWrapper>
      <form>
        <EditableDiv
          contentEditable={true}
          suppressContentEditableWarning={true}>
          Add your plan
        </EditableDiv>
        <TextArea />
      </form>
    </EditableDivWrapper>
  );
};
