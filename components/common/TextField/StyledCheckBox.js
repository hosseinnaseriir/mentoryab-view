import styled  from 'styled-components';
import theme from './../../../theme/index';

export const StyledCheckBox = styled.label`
cursor: pointer;
margin: ${theme.spacing[4]} 0;
display: flex;
align-items: center;
.label {
  color: ${theme.colors.dark};
  margin: 0 ${theme.spacing[3]};
}
.checkbox {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${theme.rounded[0]};
  border: 0.2rem solid ${theme.colors.gray[1]};
  color: ${theme.colors.dark};

  position: relative;
  span {
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    position: absolute;
    top: -0.2rem;
    right: -0.2rem;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.rounded[0]};
  }
  input {
    appearance: none;
    &:checked ~ span {
      background-color: ${theme.colors.brand};
    }
  }
}
`;