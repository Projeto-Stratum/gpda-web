export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;
export const VERCEL_ENV = process.env.VERCEL_ENV;
export const COOKIE_DOMAIN = process.env.NEXT_PUBLIC_COOKIE_DOMAIN;
export const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

export const IS_DEVELOPMENT = VERCEL_ENV === `development`;
export const IS_TEST = VERCEL_ENV === `test`;
export const IS_PRODUCTION = VERCEL_ENV === `production`;
