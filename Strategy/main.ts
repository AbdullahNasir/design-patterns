import { ChatClient } from "./chat-client";
import { AESEncryptor } from "./encryptors/aes-encryptor";
import { DESEncryptor } from "./encryptors/des-encryptor";

const chatClient = new ChatClient();

chatClient.send("hello", new AESEncryptor());

chatClient.send("world", new DESEncryptor());
