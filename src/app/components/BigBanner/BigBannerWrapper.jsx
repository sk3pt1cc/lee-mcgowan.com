import styled from 'styled-components';

const BigBannerWrapper = styled.div`
  background-color: white;
  display: flex;
  .about-text {
    flex: 90%;
  }
  .contact {
    flex: 5%;
    div {
      background-color: white;
      .socials {
        display: flex;
      }
    }
}
`;

export default BigBannerWrapper;