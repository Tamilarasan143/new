class Settings {
  db = process.env.NODE_ENV !== "production" ? localStorage : sessionStorage;

  constructor() {
    console.log("Envirnonment ", process.env.NODE_ENV);
  }

  put(key: string, value: string | number | boolean) {
    this.db.setItem(key, String(value));
  }

  getString(key: string): string | undefined {
    return this.db.getItem(key) as string;
  }

  getNumber(key: string): number | undefined {
    const res = this.db.getItem(key);
    if (res) {
      return Number(res);
    }
  }

  getBoolean(key: string): boolean {
    const res = this.db.getItem(key);
    if (res) {
      return Boolean(res);
    }
    return false;
  }

  remove(key: string) {
    this.db.removeItem(key);
  }

  getLocalUser(): any | undefined {
    const user = this.db.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
  }

  setLocalUser(user: any) {
    this.db.setItem("user", JSON.stringify(user));
  }
}
export default new Settings();
