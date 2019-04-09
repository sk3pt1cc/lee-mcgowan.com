import styled from 'styled-components';
import { headerHeight } from '../../header/HeaderWrapper';

const maxHeight = window.innerHeight - headerHeight - 5;

export default styled.div`
  overflow: scroll;
  max-height: ${maxHeight};
`;