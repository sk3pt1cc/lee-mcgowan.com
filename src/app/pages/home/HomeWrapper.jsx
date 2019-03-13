import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  section {
    flex: 50%;
  }
  @media only screen and (max-width: 875px) {
    display: block;
  }
`;

export default HomeWrapper;
