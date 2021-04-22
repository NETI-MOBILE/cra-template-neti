import React from 'react';
// import { AuthStore } from '../modules/auth/stores/AuthStore';

class RootStore {
  // authStore: AuthStore;
  // constructor() {
  //   this.authStore = new AuthStore();
  // }
}

const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
