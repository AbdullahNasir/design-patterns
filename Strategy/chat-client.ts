import { Encryptor } from "./encryptors/encryptor.interface";

export class ChatClient {
  send(message: string, encryptor: Encryptor) {
    encryptor.encrypt(message);
  }
}
