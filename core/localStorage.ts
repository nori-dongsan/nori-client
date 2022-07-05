class LocalStorage {
  constructor() {}

  static setItem(key: string, item: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, item);
    }
  }

  static getItem(key: string) {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key) as string;
    }

    return '';
  }

  static removeItem(key: string) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }

  static setUserSession(token: string, nickname: string) {
    this.setItem('nori-token', token);
    this.setItem('nori-nickname', nickname);
  }

  static clearUserSession() {
    this.removeItem('nori-token');
    this.removeItem('nori-nickname');
  }
}

export default LocalStorage;
