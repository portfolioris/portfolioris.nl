// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
// https://scotthelme.co.uk/content-security-policy-an-introduction/
// scanner: https://securityheaders.com/

const rootDomain = 'localhost:24678'; // or your server IP for dev

const directives = {
  // 'img-src': [
  //   // '*',
  //   // '\'self\'',
  //   // 'data:',
  // ],
  // 'font-src': [
  //   // '*',
  //   // '\'self\'',
  //   // 'data:',
  'default-src': [
    '\'self\'',
    // '\'foo\'',
    'https://portfolioris.nl',
    // rootDomain,
    `ws://${rootDomain}`,
    // 'https://*.google.com',
    // 'https://*.googleapis.com',
    // 'https://*.firebase.com',
    // 'https://*.gstatic.com',
    // 'https://*.cloudfunctions.net',
    // 'https://*.algolia.net',
    // 'https://*.facebook.com',
    // 'https://*.facebook.net',
    // 'https://*.stripe.com',
    // 'https://*.sentry.io',
  ],
  // ],
  'style-src': [
    '\'self\'',
    '\'unsafe-inline\'',
  ],
  'script-src': [
    '\'self\'',
    '\'unsafe-eval\'',
    '\'unsafe-inline\'',
    'https://portfolioris.nl',
  //   // 'https://portfolioris.nl',
  //   // rootDomain,
  //   // 'https://*.stripe.com',
  //   // 'https://*.facebook.com',
  //   // 'https://*.facebook.net',
  //   // 'https://*.sentry.io',
  //   // 'https://polyfill.io',
  //   // (req, res) => `'nonce-${res.locals.nonce}'`,
  ],
  // 'frame-src': [
  //   // 'https://*.stripe.com',
  //   // 'https://*.facebook.com',
  //   // 'https://*.facebook.net',
  // ],
};

const CSP = Object.entries(directives)
  .map(([key, arr]) => `${key} ${arr.join(' ')}`)
  .join('; ');

export async function handle(request, render) {
  const response = await render(request);
  console.log('handle', { ...response.headers });

  return {
    ...response,
    headers: {
      ...response.headers,
      'X-Frame-Options': 'SAMEORIGIN',
      'Referrer-Policy': 'no-referrer',
      // 'Feature-Policy': `microphone 'none'; geolocation 'none'`,
      // 'Permissions-Policy': `geolocation=(self "${rootDomain}"), camera=(), fullscreen=*`,
      'X-Content-Type-Options': 'nosniff',
      'Content-Security-Policy': CSP,
    },
  };
}
