declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * 应用标题
     */
    APP_TITLE: string
    /**
     * JWT 秘钥
     */
    JWT_SECRET: string
    /**
     * JWT 有效期，默认3天
     */
    JWT_EXPIRES_IN: string
  }
}
