import styled from 'styled-components';

const bg = '#9EA3B0';

const Container = styled.div`
  padding: 16px;
  background-color: ${props => props.colored ? bg : ''};
`;

export default Container;
