// @ts-nocheck
import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: process.env.AUTH0_SCOPE,
  redirectUri: process.env.REDIRECT_URI,
  postLogoutRedirectUri: process.env.POST_LOGOUT_REDIRECT_URI,
  audience: "myaudience",
  session: {
    cookieSecret: process.env.SESSION_COOKIE_SECRET,
    cookieLifetime: process.env.SESSION_COOKIE_LIFETIME,
    storeIdToken: false,
    storeRefreshToken: false,
    storeAccessToken: true,
  },
});
