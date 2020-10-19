import 'firebase/analytics';
import firebase from './firebase';

let analytics: firebase.analytics.Analytics | undefined;

export enum LogEvent {
  ColorClick = 'color_click',
  QuoteClick = 'quote_click',
}

class Analytics {
  constructor() {
    firebase.analytics.isSupported().then((isSupported) => {
      if (isSupported) {
        analytics = firebase.analytics();
      }
    });
  }

  public logEvent = (event: LogEvent, parameters?: any) => {
    analytics?.logEvent(event, parameters);
  };
}

export default new Analytics();
