import { Cutive_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import { ActionType } from 'store/actions';
import reducer from 'store/reducer';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from 'utils/theme';
import StyledComponentsRegistry from '../lib/registry';
import Context, { AppBackground, initialState } from './context';
import usePersistedReducer from './store/usePersistedReducer';

// Font alternatives: Special_Elite, Cutive, Cutive_Mono
const font = Cutive_Mono({ weight: '400', subsets: ['latin'] });

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${font.style.fontFamily};
  }
`;

export default function Providers({ children }: { children: ReactNode }) {
  // Persist state after reducer has been called
  const [state, dispatch] = usePersistedReducer(reducer, initialState);

  // Inject dispatch actions into provider value
  const value = {
    ...state,
    toggleBackground: () => {
      dispatch({
        payload: state.background === AppBackground.colored ? AppBackground.greyscale : AppBackground.colored,
        type: ActionType.UPDATE_BACKGROUND,
      });
    },
    toggleColor: () => {
      dispatch({
        payload: state.color === theme.primary ? theme.secondary : theme.primary,
        type: ActionType.UPDATE_COLOR,
      });
    },
  };

  return (
    <StyledComponentsRegistry>
      <Context.Provider value={value}>
        <GlobalStyle></GlobalStyle>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Context.Provider>
    </StyledComponentsRegistry>
  );
}
