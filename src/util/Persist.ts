import { IAppState } from '../components/App/AppContext';
import { LOCALSTORAGE_KEY } from './constants';

const Persist = {
  persistState: (state: IAppState) => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
  },

  getPersistedState: (): IAppState | undefined => {
    const jsonState = localStorage.getItem(LOCALSTORAGE_KEY);
    return jsonState ? JSON.parse(jsonState) : undefined;
  },
};

export default Persist;
