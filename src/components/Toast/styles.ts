import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  success: css`
    background-color: #E6FFFA;
    color: #2E656A;
  `,
  info: css`
    background-color: #EBF8FF;
    color: #3172B7;
  `,
  error: css`
  background-color: #FDDEDE;
    color: #C53030;
  `,
};

const Container = styled(animated.div)<ToastProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  background-color: #ebf8ff;
  color: #3172b7;

  & + div {
    margin-top: 8px;
  }


  ${(props) => toastTypeVariations[props.type || 'info']}
  display: flex;

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.8;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) => !props.hasDescription && css`
    align-items: center;

    svg {
      margin-top: 0;
    }
  `}
`;
export { Container };
