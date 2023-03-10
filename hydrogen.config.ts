import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'SG',
    defaultLanguageCode: 'EN',
    storeDomain: Oxygen.env.PUBLIC_STORE_DOMAIN || 'merkle-vn.myshopify.com',
    storefrontToken: Oxygen.env.PUBLIC_STOREFRONT_API_TOKEN || '3155188cfb5b4f6c4a9e9110990dc06f',
    privateStorefrontToken: Oxygen.env.PRIVATE_STOREFRONT_API_TOKEN,
    storefrontApiVersion: '2022-07',
    storefrontId: Oxygen.env.PUBLIC_STOREFRONT_ID,
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
