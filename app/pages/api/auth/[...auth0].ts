// @ts-nocheck
import { handleProfile, handleAuth, handleLogin, handleCallback } from "@auth0/nextjs-auth0";

function getUrls(req) {
  const { query } = req;
  const host = req.headers["host"];
  const referer = req.headers.referer;
  const protocol = process.env.ENVIRONMENT === "local" ? "http" : "https";
  const redirectUri = `${protocol}://${host}/api/auth/callback`;
  const returnToLogout = `${protocol}://${host}`;
  const returnTo = `${referer || "/data/frame/[project_id]"}`;
  return {
    redirectUri,
    returnTo,
    returnToLogout,
    signup: query.signup,
  };
}

function getRedirectUrls(webUrl: string | undefined) {
  if (webUrl === undefined)
    throw new Error("Error get base Url. Missing request URL.");
  const urlObject = new URL(webUrl);
  const returnTo = `${urlObject.protocol}//${urlObject.host}`;
  return {
    returnTo,
    redirect_uri: `${returnTo}/api/auth/callback`,
  };
}

function getLoginOptions(req, res) {
  const { redirect_uri, returnTo, signup, redirectUri } = getUrls(req);
  const authorizationParams = {
    response_type: "code",
    // scope: 'openid profile email',
    // prompt: "login",
    screen_hint: signup ? "signup" : null,
  };

  return {
    authorizationParams: {
      ...authorizationParams,
      returnTo,
    },
    returnTo,
    redirectUri
  };
}

export default handleAuth({
  async callback(req, res) {
    const { authorizationParams, returnTo, redirectUri } = getLoginOptions(req, res);

    return handleCallback(req, res, {
      authorizationParams: {
        ...authorizationParams,
        audience: process.env.AUTH0_AUDIENCE,
        scope: process.env.AUTH0_SCOPE,
        redirect_uri: redirectUri,
      },
      redirectUri: redirectUri,
    });
  },

  async login(req, res) {
    try {

      const { authorizationParams, returnTo } = getLoginOptions(req, res);

      await handleLogin(req, res, {
        authorizationParams,
        returnTo,
      });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
});
