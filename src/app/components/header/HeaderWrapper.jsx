import styled from 'styled-components';

const blackBoxHeight = 80;
const headlineHeight = 40;
export const headerHeight = blackBoxHeight + headlineHeight;

const HeaderWrapper = styled.div`
  width: 100%;
  font-family: 'American Typewriter', 'Andale Mono';
  .headline {
    height: ${headlineHeight}px;
    font-size: 0.5rem;
    padding: 8px;
    padding-left: 50px;
  }
  .black-box {
    height: ${blackBoxHeight}px;
    background-color: black;
  }
`;

export default HeaderWrapper;