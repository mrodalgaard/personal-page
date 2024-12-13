import { z } from 'zod';
import { useStorageState } from './useStorageState';

describe('useStorageState', () => {
  it('store and rehydrate state from local storage', () => {
    const Component = ({ id = 'header' }: { id?: string }) => {
      const [name, setName] = useStorageState('name', z.string(), 'John Doe');

      return (
        <>
          <h1 id={id}>{name}</h1>
          <button onClick={() => setName('Jane Doe')}>Change name</button>
        </>
      );
    };

    cy.mount(<Component />);
    cy.get('#header').should('have.text', 'John Doe');
    cy.get('button').click();
    cy.get('#header').should('have.text', 'Jane Doe');

    cy.mount(<Component id="header2" />);
    cy.get('#header2').should('have.text', 'Jane Doe');

    cy.clearAllLocalStorage();

    cy.mount(<Component id="header3" />);
    cy.get('#header3').should('have.text', 'John Doe');
  });

  it('store and rehydrate object from local storage', () => {
    const Component = ({ id = 'header' }: { id?: string }) => {
      const [object, setObject] = useStorageState(
        'object',
        z.object({
          name: z.string().default('John Doe'),
          age: z.number().max(60).optional(),
          skills: z.array(z.string()),
        }),
        () => {
          return {
            name: 'Jane Doe',
            skills: ['skill1', 'skill2'],
          };
        }
      );

      return (
        <>
          <h1 id={id}>{JSON.stringify(object)}</h1>
          <button onClick={() => setObject((object) => ({ ...object, age: 30 }))}>Change</button>
        </>
      );
    };

    cy.mount(<Component />);
    cy.get('#header').should('have.text', '{"name":"Jane Doe","skills":["skill1","skill2"]}');
    cy.get('button').click();
    cy.get('#header').should('have.text', '{"name":"Jane Doe","skills":["skill1","skill2"],"age":30}');

    cy.mount(<Component id="header2" />);
    cy.get('#header2').should('have.text', '{"name":"Jane Doe","age":30,"skills":["skill1","skill2"]}');
  });

  it('subscribes on storage changes', () => {
    const Component = () => {
      const [number] = useStorageState('number', z.number(), 123);

      return <h1>{number}</h1>;
    };

    cy.mount(<Component />);
    cy.get('h1').should('have.text', '123');

    cy.window().then((win) => {
      win.dispatchEvent(new StorageEvent('storage', { key: 'number', newValue: '1', oldValue: '123' }));
      cy.get('h1').should('have.text', '1');
    });

    cy.window().then((win) => {
      win.dispatchEvent(new StorageEvent('storage', { key: 'number', newValue: '456', oldValue: '1' }));
      cy.get('h1').should('have.text', '456');
    });
  });

  it('handles invalid data', () => {
    const Component = () => {
      const [number] = useStorageState('number', z.number(), 123);

      return <h1>{number}</h1>;
    };

    cy.mount(<Component />);
    cy.get('h1').should('have.text', '123');

    cy.window().then((win) => {
      win.dispatchEvent(new StorageEvent('storage', { key: 'number', newValue: 'hello', oldValue: '123' }));
      cy.get('h1').should('have.text', '123');
    });

    cy.window().then((win) => {
      win.dispatchEvent(new StorageEvent('storage', { key: 'number', newValue: 'NaN', oldValue: '123' }));
      cy.get('h1').should('have.text', '123');
    });
  });
});
