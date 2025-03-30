import { StrictMode } from 'react'

import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes'
import { ErrorFallback } from './components/error-fallback/index.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <Theme accentColor="iris" radius="medium">
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </Theme>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
)
