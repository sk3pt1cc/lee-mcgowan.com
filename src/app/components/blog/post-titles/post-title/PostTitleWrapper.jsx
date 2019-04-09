import styled from 'styled-components';

export default styled.div`
  color: black;
  border-right: 1px solid ${({selected}) => selected ? 'black' : '#C3C3C3' };
  h2 {
    color: ${({selected}) => selected ? 'black': '#737373'};
    font-size: 0.9rem;
    cursor: pointer;
  }
  p {
    font-size: 0.8rem;
    color: #C3C3C3;
  }
`;