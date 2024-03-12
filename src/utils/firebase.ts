import { FirebaseOptions, initializeApp } from 'firebase/app';

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyDNryyus5vXPfJFbaObvRu1cSbMxWmEGuk',
  authDomain: 'personal-page-f12b5.firebaseapp.com',
  databaseURL: 'https://personal-page-f12b5.firebaseio.com',
  projectId: 'personal-page-f12b5',
  storageBucket: 'personal-page-f12b5.appspot.com',
  messagingSenderId: '77914711698',
  appId: '1:77914711698:web:e2b1269895bcb14364a84b',
  measurementId: 'G-Q07F44XC3V',
};

export const firebase = initializeApp(firebaseConfig);
