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
  #root {
    // max-width: 1600px;
    // margin: 25px auto;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  .MuiAppBar-colorPrimary {
    color: #000 !important;
    background-color: transparent !important;
  }
  
  .makeStyles-toolbar-6 {
    min-height: 38px !important;
  }
  
  .MuiTypography-h6 {
    font-weight: bold !important;
  }
  .MuiPaper-elevation4 {
    box-shadow: 0px 0 !important;
  }
  .MuiDivider-root {
    height: 0 !important;
  }
`;