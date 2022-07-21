class LocalStorage {
  constructor() {}

  static setItem(key: string, item: string) {
    localStorage.setItem(key, item);
  }

  static getItem(key: string) {
    return localStorage.getItem(key) as string;
  }

  static removeItem(key: string) {
    localStorage.removeItem(key);
  }

  static setUserSession(accessToken: string, refreshToken: string) {
    this.setItem('accessToken', accessToken);
    this.setItem('refreshToken', refreshToken);
  }

  static clearUserSession() {
    this.removeItem('accessToken');
    this.removeItem('refreshToken');
  }
}

export default LocalStorage;
