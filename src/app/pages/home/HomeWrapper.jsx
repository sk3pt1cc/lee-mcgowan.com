import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  section {
    flex: 50%;
  }
  @media only screen and (max-width: 875px) {
    display: block;
    padding: 0;
  }
`;

export default HomeWrapper;
