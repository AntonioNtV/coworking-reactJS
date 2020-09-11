import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signInBackground from '../../assets/sign-in-background.png';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0px)
  }
`;

const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${appearFromLeft} 1s;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
    margin-bottom: 24px;
  }
    a {
      color: #F4EDE8;
      display: block;
      text-decoration: none;
      margin-top: 24px;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#F4EDE8')}
      }
    }
  }
  > a {
      display: flex;
      align-items: center;
      color: #FF9000;
      text-decoration: none;
      margin-top: 24px;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#FF9000')}
      }
      svg {
        margin-right: 18.5px;
      }
  }`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;

export {
  Container, Content, Background, AnimationContainer,
};
