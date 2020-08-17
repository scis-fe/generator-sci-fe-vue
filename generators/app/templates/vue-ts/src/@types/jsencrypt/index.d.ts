declare module 'jsencrypt' {
  export class JSEncrypt {
    /**
     * 设置公钥
     * @param { string } publicKey 公钥
     * @return { void } 无返回值
     */
    setPublicKey: (publicKey: string) => void;

    /**
     * 设置私钥
     * @param { string } privateKey 私钥
     * @return { void } 无返回值
     */
    setPrivateKey: (privateKey: string) => void;

    /**
     * 加密
     * @param { string } content 内容
     * @return { string } 加密后的字符串
     */
    encrypt: (content: string) => string;

    /**
     * 解密
     * @param { string } content 内容
     * @return { string } 解密后的内容
     */
    decrypt: (content: string) => string;
  }
}
