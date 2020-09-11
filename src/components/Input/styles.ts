import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip/index';

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    color: #666360;
    ${(props) => props.isErrored && css`
      border-color: #c53030;
    `}
    ${(props) => props.isFilled && css`
      svg {
        color: #FF9000
      }
    `}
    ${(props) => props.isFocused && css`
      border-color: #FF9000;
      svg {
        color: #FF9000
      }
    `}
    & + div {
      margin-top: 8px;
    }
    input {
      background: transparent;
      flex: 1;
      border: 0;
      color: #F4EDE8;
      &::placeholder {
        color: #666360;
      }
    }
    svg {
      margin-right: 16px;
    }
`;

const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 10px;
  svg {
      margin: 0;
      color: #C53030;
  }
  span {
    background: #C53030;
    color: #FFF;
    &::before {
      border-color: #C53030 transparent;
    }
  }
`;

export { Container, Error };
