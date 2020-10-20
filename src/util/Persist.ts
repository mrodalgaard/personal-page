import { IAppState } from '../components/App/AppContext';
import { LOCALSTORAGE_KEY } from './constants';

class Persist {
  public static persistState = (state: IAppState) => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
  };

  public static getPersistedState = (): IAppState | undefined => {
    const jsonState = localStorage.getItem(LOCALSTORAGE_KEY);
    return jsonState ? JSON.parse(jsonState) : undefined;
  };
}

export default Persist;
