import AsyncStorage from "@react-native-community/async-storage";

export default class LocalStorage<T = string> {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  saveData(value: T) {
    return AsyncStorage.setItem(this.key, JSON.stringify(value));
  }

  async loadData(): Promise<T | null> {
    const data = await AsyncStorage.getItem(this.key);
    return data ? JSON.parse(data) : null;
  }

  clearData() {
    return AsyncStorage.removeItem(this.key);
  }
}
