import { Global, ThemeProvider } from '@emotion/react';

import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AppRouter } from '@/router/router';

import { GlobalStyle } from '@/styles/GlobalStyle';
import { Theme } from '@/styles/theme';

import { SideProvider } from '@/contexts/sidePanelContext';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={Theme}>
      <SideProvider>
        <Global styles={GlobalStyle} />
        <AppRouter />
      </SideProvider>
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  // </React.StrictMode>,
);
