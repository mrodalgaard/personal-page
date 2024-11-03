import { AppContextProvider } from 'contexts/AppContext';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import { App } from 'features/App';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import 'reset.css';
import { monitorPerformance } from 'utils/firebase';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AppContextProvider>
  </StrictMode>
);

monitorPerformance();
