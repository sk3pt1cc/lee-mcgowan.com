import styled from 'styled-components';

const TextInputWrapper = styled.div`
  padding: 16px;
  text-align: center;
  margin-bottom: 30px;
  input {
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    padding-bottom: 16px;
    background-color: transparent;
  }

  textarea {
    width: 100%;
    border: 1px solid #E6E6E6;
    background-color: transparent;
  }
`;

export default TextInputWrapper;
