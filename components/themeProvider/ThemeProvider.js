import { ThemeProvider } from "styled-components";
import { ThemeStyles } from "./ThemeProvider.styled";
import { ThemeProviderStyles } from "./Theme.config";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${ThemeStyles}
`;

const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ThemeProviderStyles}>
      <GlobalStyle />
        {children}
    </ThemeProvider>
  )
}

export { AppTheme };