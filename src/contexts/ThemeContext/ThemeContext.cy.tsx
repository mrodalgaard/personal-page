import { AppContext } from 'contexts/AppContext';
import { useContext } from 'react';
import { useTheme } from 'styled-components';
import { darkColors, lightColors } from './theme';

describe('ThemeContext', () => {
  it('sets theme colors depending on mode', () => {
    const Component = () => {
      const { toggleMode } = useContext(AppContext);
      const theme = useTheme();

      return (
        <>
          <h1 id="primary">{theme.colors.primary}</h1>
          <h1 id="font">{theme.font}</h1>
          <button onClick={toggleMode}>Toggle Mode</button>
        </>
      );
    };

    // Stub media query to set initial mode to light
    cy.matchMedia('(prefers-color-scheme: dark)', false);

    cy.mount(<Component />);
    cy.get('#font').should('have.text', 'Cutive Mono');
    cy.get('#primary').should('have.text', lightColors.primary);
    cy.get('button').click();
    cy.get('#primary').should('have.text', darkColors.primary);
  });
});
