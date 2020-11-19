import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
    background-color: #EFEFEF;
  }
  button {
    cursor: pointer;
  }
  h3 {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;