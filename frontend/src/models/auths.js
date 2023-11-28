function getGoogleAuthLink() {
    const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Parameters to pass to OAuth 2.0 endpoint.
  const params = {
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: 'http://localhost:8080/oauth2callback',
    response_type: 'token',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' '),
    include_granted_scopes: 'true',
    state: 'pass-through value',
  };

  let url = `${oauth2Endpoint}?`;

  Object.entries(params).forEach((param) => {
    url += `${param[0]}=${param[1]}&`;
  });

  return url;
}

export default getGoogleAuthLink;