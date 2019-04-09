import styled from 'styled-components';

const Form = styled.form`
  input {
    outline: none;
    border: none;
    background-color: inherit;
    font-size: 1rem;
    width: 100%;
    padding-bottom: 8px;
    margin-bottom: 16px;
  }
  textarea {
    outline: none;
    background-color: inherit;
    font-size: 1rem;
    width: 100%;
    padding: 16px;
    margin-bottom: 16px;
  }
  .big-input {
    font-size: 2rem;
  }
`;

export default Form;