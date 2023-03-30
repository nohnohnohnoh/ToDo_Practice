import React from "react";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import ToDoList from "./components/ToDoList";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { darkMode } from "./atom";
import { darkTheme, lightTheme } from "./styles/theme";

const GlobalStyle = createGlobalStyle`
`;

function App() {
  const dark = useRecoilValue(darkMode);
  return (
    <>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <ToDoList />
      </ThemeProvider>
    </>
  );
}

export default App;
