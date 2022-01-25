import theme from './../../../theme/index';
import styled from "styled-components";

export const StyledLabel = styled.label `
height: 6rem;
display: flex;
color: ${theme.colors.black};
border-radius: ${theme.rounded[2]};
border: 0.2rem solid ${theme.colors.gray[0]};
align-items: center;
overflow: hidden;
margin: ${theme.spacing[4]} 0;
&:focus-within {
  border-color: ${theme.colors.dark};
  color: ${theme.colors.dark};
}

&>input {
  margin: 0;
  font-size: ${theme.typography.h6};
  height: 100%;
  width: 100%;
  outline: none;
  border: 0;
  background-color: transparent;
  padding: 1.6rem;
}

&>span {
  width: 5.6rem;
  height: 100%;
  padding: 0 ${theme.spacing[3]} 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &:nth-last-child(1) {
    padding: 0 0 0 ${theme.spacing[3]};
  }
}
`;