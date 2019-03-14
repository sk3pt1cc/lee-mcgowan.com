import styled from 'styled-components';

export const headerBarHeight = 100;

const HeaderWrapper = styled.div`
  background-color: #203e6d;
  color: white;
  text-align: center;
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: ${headerBarHeight}px;
  h1 {
    font-size: 1.4rem;
    small {
      font-size: 0.8rem;
      font-weight: normal;
    }
  }
`;

export default HeaderWrapper;