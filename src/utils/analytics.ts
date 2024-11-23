import { logEvent as firebaseLogEvent, getAnalytics, isSupported, setUserProperties } from 'firebase/analytics';
import { firebase } from './firebase';
import { isDev } from './isDev';

export enum AnalyticsEvent {
  ColorClick = 'color_click',
  QuoteClick = 'quote_click',
  MailClick = 'mail_click',
  ModeClick = 'mode_click',
  SoundClick = 'sound_click',

  WhoAmILink = 'who_am_i_link',
  LinkedInLink = 'linkedin_link',
  LinkedInIconLink = 'linkedin_icon_link',
  XLink = 'x_link',
  XIconLink = 'x_icon_link',
  GithubLink = 'github_link',
  GithubIconLink = 'github_icon_link',
  WorkLink = 'work_link',

  WebVitals = 'web_vitals',
}

type Parameters = { [key: string]: unknown };

export const logEvent = async (event: AnalyticsEvent, parameters?: Parameters) => {
  if (!isDev && (await isSupported())) {
    firebaseLogEvent(getAnalytics(firebase), event, parameters);
  }
};

export const setUserProperty = async (name: AnalyticsEvent, value: unknown) => {
  if (!isDev && (await isSupported())) {
    setUserProperties(getAnalytics(firebase), { [name]: value });
  }
};
