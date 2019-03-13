import styled from 'styled-components';

const Container = styled.div`
  width: ${props => props.noMargin ? 100 : 90 }%;
  margin: ${props => props.noMargin ? 0 : 'auto' };
  padding: 16px;
`;

export default Container;