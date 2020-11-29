import { Encryptor } from "./encryptor.interface";

export class AESEncryptor implements Encryptor {
  encrypt(msg: string): string {
    console.log("encrypting message with AES encryptor");
    return msg;
  }
}
