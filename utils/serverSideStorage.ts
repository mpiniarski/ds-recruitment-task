import { StorageObj } from 'react-storage-hooks/dist/common';

// needed to use browser storage (session/local) with SSR
const serverSideStorage: StorageObj = {
  getItem: () => null,
  setItem: () => {
  },
  removeItem: () => {
  },
};

export default serverSideStorage;
