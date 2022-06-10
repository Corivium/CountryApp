import { AppTheme } from "../components/themeProvider/ThemeProvider";
import Container from '../components/container/Container';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <AppTheme>
        <Component {...pageProps} />
      </AppTheme>
    </Container>
  )
}

export default MyApp;
