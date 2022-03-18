import styled, {createGlobalStyle} from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;

  .main {
    flex-grow: 1;
  }
`

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Arial", sans-serif;
  }
`