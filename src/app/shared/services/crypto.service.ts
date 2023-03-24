import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { StorageService } from './storage.service';

const MAIN_KEY = "Informata.Moura.WebApp"

// Isso excede o tamnho maximo do storage
// const MAIN_KEY = CryptoJS.SHA256("Informata.Moura.WebApp", { outputLength: 256 })
// const MAIN_KEY = CryptoJS.RIPEMD160("Informata.Moura.WebApp")

export enum USER_ROLES {
  "GESTOR" = '0',
  "OPERADOR" = '1'
}

@Injectable({
  providedIn: 'root',
})
export class CryptoService {

  constructor(private storageService: StorageService) { }

  /**
   * Create and store SafeKey
   * @param text to encrypt
   * @return void
   */
  encryptSafeKey(text: string) {
    const safeKey = this.encryptAES(text, this.getMainKey());
    this.storageService.genericBtoaSet("safeKey", safeKey);
  }

  /**
  * Get SafeKey
  * @return safeKey
  */
  getSafeKey() {
    const safeKey = this.storageService.genericBtoaGet("safeKey")
    if (safeKey) {
      return safeKey;
    }
    return this.hasError(1);
  }

  /**
   * Create and store values
   * @param key encryption key
   * @param value to encrypt
   * @return void
   */
  setToEncrypt(key: string, value: string) {
    if (key && value) {
      this.storageService.genericBtoaSet(key, this.encryptWithSafeKey(value));
    }
    return this.hasError(6)
  }

  /**
   * Create an additional layer of encryption based on the SafeKey
   * @param text to encrypt
   * @return void
   */
  private encryptWithSafeKey(text: string) {
    return this.encryptAES(text, this.getSafeKey())
  }

  /**
   * Get data decrypted
   * @param key encryption key
   * @return string
   */
  getDecryptedUserData(key: string, session?: boolean) {

    let valueDecrypted = this.storageService.genericBtoaGet(key)

    if (valueDecrypted) {
      return this.decryptAES(valueDecrypted, this.getSafeKey())
    }

    return this.hasError(2);
  }

  /**
   * Create an additional layer of encryption based on the MainKey
   * @return void
   */
  private encryptMainKey() {
    const mainKey = this.encryptAES(MAIN_KEY, MAIN_KEY);
    this.storageService.genericBtoaSet("mainKey", mainKey)
  }

  /**
   * Get the MainKey
   * @if NOT existe mainKey, recall themself until exist
   * @return void
   */
  private getMainKey(): string {
    const mainKey = this.storageService.genericBtoaGet("mainKey")
    if (mainKey) {
      return mainKey;
    }

    this.encryptMainKey();
    return this.getMainKey();
  }

  /*
   * Encrypt a derived hd private key with a given pin and return it in Base64 form
   */
  private encryptAES = (text: string | CryptoJS.lib.WordArray, key: string | CryptoJS.lib.WordArray) => {
    const cfg = this.getOption(this.returnKeyIV(key));
    if (text && key) {
      // console.log(text);
      // console.log(JSON.stringify(text));
      // console.log("===========");

      return CryptoJS.AES.encrypt(text, key, cfg).toString();
    }
    return this.hasError(7);
  };

  /**
   * Decrypt an encrypted message
   * @param encryptedBase64 encrypted data in base64 format
   * @param key The secret key
   * @return The decrypted content
   */
  private decryptAES = (ciphertext: string | CryptoJS.lib.CipherParams, key: string) => {
    const cfg = this.getOption(this.returnKeyIV(key));
    const decrypted = CryptoJS.AES.decrypt(ciphertext, key, cfg);

    if (decrypted) {
      try {
        const str = decrypted.toString(CryptoJS.enc.Utf8);
        if (str.length > 0) {
          return str;
        }
        return this.hasError(3);
      } catch (e) {
        return this.hasError(4);
      }
    }
    return this.hasError(5);
  };

  private getOption = (iv: string) => ({
    iv: this.getIV(iv),
    padding: CryptoJS.pad.AnsiX923,
    format: CryptoJS.format.OpenSSL,
    mode: CryptoJS.mode.CFB,
  })

  private returnKeyIV(key: string | CryptoJS.lib.WordArray) {
    return key.toString(CryptoJS.enc.Base64).slice(-22)
  }

  private getIV = (iv: string) => {
    return CryptoJS.enc.Base64.parse(iv)
  };

  private hasError(step?: number) {
    return ""
    return "Ocorreu um erro na consulta de dados. Estágio: " + step
  }
}
