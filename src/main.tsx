import { AppContextProvider } from 'contexts/AppContext';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import { App } from 'features/App';
import 'index.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { reportWebVitals } from 'reportWebVitals';
import { logWebVitals } from 'utils/analytics';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AppContextProvider>
  </StrictMode>
);

reportWebVitals(logWebVitals);
