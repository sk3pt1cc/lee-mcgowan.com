import styled from 'styled-components';

const HomeWrapper = styled.div`
  margin-top: 100px;
  margin: 16px;
  .content {
    display: flex;
    .img-container {
      width: 100%;
      img {
        max-width: 100%;
      }
    }
    .text-container {
      width: 100%;
      text-align: left;
      padding-left: 16px;
    }
  }
`;

export default HomeWrapper;
