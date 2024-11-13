export const fallbackLng = 'en';
export const languages = ['en', 'ar'] as const;
export type Language = (typeof languages)[number];