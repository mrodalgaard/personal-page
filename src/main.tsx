import { AppContextProvider } from 'contexts/AppContext';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import App from 'features/App';
import 'index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { reportWebVitals } from 'reportWebVitals';
import { logWebVitals } from 'utils/analytics';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);

reportWebVitals(logWebVitals);
