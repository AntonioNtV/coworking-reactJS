import styled from 'styled-components';
import { shade } from 'polished';

const Container = styled.button`
      background: #F02D3A;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      width: 100%;
      color: #EFF6EE;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;
      &:hover {
        background-color: ${shade(0.2, '#F02D3A')}
    }`;

export { Container };
