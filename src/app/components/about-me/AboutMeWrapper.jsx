import styled from 'styled-components';

const AboutMeWrapper = styled.div`
  background-color: white;
  .content {
    display: flex;
    @media only screen and (max-width: 500px) {
      display: block;
    }
    div {
      padding: 16px;
      img {
        max-width: 100%;
      }
    }
  }
`;

export default AboutMeWrapper;
