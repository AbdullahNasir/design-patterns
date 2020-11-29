import { Encryptor } from "./encryptor.interface";

export class DESEncryptor implements Encryptor {
  encrypt(msg: string): string {
    console.log("Encrypting message using DES");
    return msg;
  }
}
