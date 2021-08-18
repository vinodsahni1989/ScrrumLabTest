import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;


  constructor(private storage: Storage) {

  }

  async store(storageKey: string, value: any) {
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    return await this.storage.set(storageKey, encryptedValue);
  }

  async get(storageKey: string) {
    return new Promise(resolve => {
      this.storage.get(storageKey).then((value) => {
        if (value == null) {
          resolve(false);
        } else {
          resolve(JSON.parse(unescape(atob(value))));
        }
      });
    });
  }

  async removeItem(storageKey: string) {
    await this.storage.remove(storageKey);
  }

  async clear() {
    await this.storage.clear();
  }
}
