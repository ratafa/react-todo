import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 512px;
  height: 768px;
  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  margin: 0 auto; /* 페이지가 중앙에 나타나도록 설정합니다 */
  margin-top: 96px;
  margin-bottom: 32px;
`;

const TodoTemplate = (props) => {
    return <TodoTemplateBlock>{props.children}</TodoTemplateBlock>
}

export default TodoTemplate;
