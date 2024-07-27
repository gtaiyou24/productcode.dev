export const BASE_URL = process.env.NODE_ENV === "production"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` ?? 'https://thecode.dev'
    : 'http://localhost:3000';

export const APP_NAME = 'Code';

export const X_CREATOR = '@tm_taiyo';