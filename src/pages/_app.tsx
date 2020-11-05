import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from '../lib/createApolloCLient';

const client = createApolloClient();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default MyApp;
