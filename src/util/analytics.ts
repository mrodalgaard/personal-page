import 'firebase/analytics';
import { Metric } from 'web-vitals';
import firebase from './firebase';

export enum LogEvent {
  ColorClick = 'color_click',
  QuoteClick = 'quote_click',
  MailClick = 'mail_click',

  WhoAmILink = 'who_am_i_link',
  FacebookLink = 'facebook_link',
  LinkedInLink = 'linkedin_link',
  TwitterLink = 'twitterLink',
  GithubLink = 'github_link',
  WorkLink = 'work_link',

  WebVitals = 'web_vitals',
}

class Analytics {
  private analytics: firebase.analytics.Analytics | undefined;

  constructor() {
    firebase.analytics.isSupported().then((isSupported) => {
      if (isSupported) {
        this.analytics = firebase.analytics();
      }
    });
  }

  public logEvent = (event: LogEvent, parameters?: any) => {
    this.analytics?.logEvent(event, parameters);
  };

  public sendToAnalytics = ({ id, name, value }: Metric) => {
    this.analytics?.logEvent(LogEvent.WebVitals, {
      id,
      name,
      value: Math.round(name === 'CLS' ? value * 1000 : value),
    });
  };
}

export default new Analytics();
