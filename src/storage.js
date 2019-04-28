class Storage {
  getItem(key) {
    return new Promise((resolve, fail) => {
      resolve(localStorage.getItem(key));
    });
  }
  setItem(key, value) {
    return new Promise((resolve, fail) => {
      resolve(localStorage.setItem(key));
    });
  }
  removeItem(key) {
    return new Promise((resolve, fail) => {
      resolve(localStorage.removeItem(key));
    });
  }
}

export const AsyncStorage = new Storage();
