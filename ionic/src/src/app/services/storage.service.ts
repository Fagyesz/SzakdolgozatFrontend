import { Injectable } from '@angular/core'

import { Storage } from '@ionic/storage-angular'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null
  private _ready: boolean = false
  get ready(): boolean {
    return this._ready
  }

  constructor(private storage: Storage) {
    // noinspection JSIgnoredPromiseFromCall
    this.init()
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create()
    console.log('Storage created')
    this._storage = storage
    this._ready = true
  }

  public async set(key: string, value: any) {
    await this.waitForStorage()
    await this._storage?.set(key, value)
  }

  public async get<T = any>(key: string): Promise<T|null> {
    await this.waitForStorage()
    return this._storage?.get(key) ?? null
  }

  public async remove<T = any>(key: string): Promise<T | null> {
    await this.waitForStorage()
    return this._storage?.remove(key)
  }

  public async waitForStorage(){
    while(!this.ready) // define the condition as you like
      await new Promise(resolve => setTimeout(resolve, 250))
    return this._storage
  }
}
