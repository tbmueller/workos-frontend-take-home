import { StrictMode } from 'react'

import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes'
import { ErrorFallback } from './error-fallback/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <Theme>
          <App />
        </Theme>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
)
