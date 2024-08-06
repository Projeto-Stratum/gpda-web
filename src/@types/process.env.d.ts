declare global {
  namespace NodeJS {
    interface ProcessEnv {
      /**
       * Cookie base domain (for sessions).
       */
      NEXT_PUBLIC_COOKIE_DOMAIN: string;
      /**
       * BFF base url.
       */
      NEXT_PUBLIC_API_URL: string;
      /**
       * TCWeb base url.
       */
      NEXT_PUBLIC_WEB_URL: string;
    }
  }
}

export {};
