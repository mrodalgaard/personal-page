import { theme } from 'contexts/ThemeContext';
import { useContext } from 'react';
import { useTheme } from 'styled-components';
import { AppContext } from '.';

describe('AppContext', () => {
  it('stores and rehydrates mode from local storage', () => {
    const Component = ({ id = 'mode' }: { id?: string }) => {
      const { mode, toggleMode } = useContext(AppContext);

      return (
        <>
          <h1 id={id}>{mode}</h1>
          <button onClick={toggleMode}>Toggle</button>
        </>
      );
    };

    cy.log('Stub media query to prefer light mode');
    cy.matchMedia('(prefers-color-scheme: dark)', false);

    cy.log('Initial mode state and toggle mode');
    cy.mount(<Component />);
    cy.get('#mode').should('have.text', 'system');
    cy.get('button').click();
    cy.get('#mode').should('have.text', 'dark');

    cy.log('Rehydrate mode state');
    cy.mount(<Component id={'mode2'} />);
    cy.get('#mode2').should('have.text', 'dark');
    cy.get('button').click();
    cy.mount(<Component id={'mode3'} />);
    cy.get('#mode3').should('have.text', 'light');
    cy.get('button').click();
    cy.get('#mode3').should('have.text', 'system');
    cy.get('button').click();
    cy.get('#mode3').should('have.text', 'dark');

    cy.log('Clear local storage and rehydrate initial state');
    cy.clearAllLocalStorage();
    cy.mount(<Component id={'mode4'} />);
    cy.get('#mode4').should('have.text', 'system');
  });

  it('also persists colorized and sound', () => {
    ['colorized', 'sound'].map((test) => {
      const Component = ({ id }: { id?: string }) => {
        const { sound, colorized, toggleSound, toggleColorized } = useContext(AppContext);

        return (
          <>
            <h1 id={id}>{String(test === 'colorized' ? colorized : sound)}</h1>
            <button onClick={test === 'colorized' ? toggleColorized : toggleSound}>Toggle</button>
          </>
        );
      };

      cy.log(`Initial state for ${test}`);
      cy.mount(<Component id="1" />);
      cy.get('#1').should('have.text', 'false');
      cy.get('button').click();
      cy.get('#1').should('have.text', 'true');

      cy.log(`Rehydrate state for ${test}`);
      cy.mount(<Component id="2" />);
      cy.get('#2').should('have.text', 'true');
      cy.get('button').click();
      cy.mount(<Component id="3" />);
      cy.get('#3').should('have.text', 'false');
    });
  });

  it('toggles mode intelligently', () => {
    const Component = () => {
      const { mode, toggleMode } = useContext(AppContext);
      const { colors } = useTheme();

      return (
        <>
          <h1 id="mode">{mode}</h1>
          <h1 id="theme">{colors === theme.colors ? 'light' : 'dark'}</h1>
          <button onClick={toggleMode}>Toggle</button>
        </>
      );
    };

    cy.log('Set users preferred mode to light');
    let matchMediaListener: (event: MediaQueryListEvent) => void;
    cy.matchMedia('(prefers-color-scheme: dark)', false).then((listener) => {
      matchMediaListener = listener;
    });

    cy.mount(<Component />);

    cy.log('Toggle between modes');
    cy.get('#theme').should('have.text', 'light');
    cy.get('#mode').should('have.text', 'system');
    cy.get('button').click();
    cy.get('#mode').should('have.text', 'dark');
    cy.get('button').click();
    cy.get('#mode').should('have.text', 'light');
    cy.get('button').click();
    cy.get('#mode').should('have.text', 'system');

    cy.log('Change users preferred mode to dark while on system mode');
    cy.get('#theme').should('have.text', 'light');
    cy.get('#theme').should((theme) => {
      matchMediaListener({ matches: true } as MediaQueryListEvent);
      expect(theme).to.have.text('dark');
    });

    cy.get('#mode').should('have.text', 'system');
    cy.get('button').click();
    cy.get('#mode').should('have.text', 'light');
    cy.get('button').click();
    cy.get('#mode').should('have.text', 'dark');

    cy.log('Change users preferred mode to light while on dark mode');
    cy.get('#theme').should('have.text', 'dark');
    cy.get('#theme').should((theme) => {
      matchMediaListener({ matches: false } as MediaQueryListEvent);
      expect(theme).to.have.text('dark');
    });

    cy.get('#mode').should('have.text', 'dark');
    cy.get('button').click();
    cy.get('#mode').should('have.text', 'light');
    cy.get('button').click();
    cy.get('#mode').should('have.text', 'system');
  });

  it('has reducedMotion as state from media query', () => {
    const Component = () => {
      const { reducedMotion } = useContext(AppContext);

      return <h1>{reducedMotion.toString()}</h1>;
    };

    cy.log('Stub media query');
    cy.matchMedia('(prefers-reduced-motion: no-preference)').then((listener) => {
      cy.mount(<Component />);
      cy.get('h1').should('have.text', 'false');

      cy.log('Simulate reduced motion change event');
      cy.get('h1').should((h1) => {
        listener({ matches: false } as MediaQueryListEvent);
        expect(h1).to.have.text('true');
      });
    });
  });

  it('handle browsers without match media support', () => {
    const Component = () => {
      const { mode, reducedMotion } = useContext(AppContext);
      const { colors } = useTheme();

      return (
        <>
          <h1 id="mode">{mode}</h1>
          <h1 id="theme">{colors === theme.colors ? 'light' : 'dark'}</h1>
          <h1 id="reducedMotion">{reducedMotion.toString()}</h1>
        </>
      );
    };

    cy.log('Undefine match media');
    cy.window().then((win) => {
      (win.matchMedia as unknown) = undefined;
    });

    cy.mount(<Component />);
    cy.get('#mode').should('have.text', 'system');
    cy.get('#theme').should('have.text', 'light');
    cy.get('#reducedMotion').should('have.text', 'true');
  });
});
