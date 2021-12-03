const API_ROOT = import.meta.env.VITE_MEDIA_URL;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ headers, params }) {
// export async function get(foo) {
//   console.log(foo);
//   return;
  // the `slug` parameter is available because this file
  // is called [slug].json.js
  const { rest } = params;

  // const url = `${API_ROOT}${event.path.substring(prefix.length)}`;
  const url = `${API_ROOT}${rest}`;
  try {
    const req = await fetch(url, {
      headers: {
        accept: headers.accept,
      },
    });
    const res = await req.arrayBuffer();
    console.log(req.headers.get('Content-Type'));
    return {
      statusCode: 200,
      body: Buffer.from(res),
        // .toString('base64'),
      // isBase64Encoded: true,
      headers: {
        'Content-Type': req.headers.get('Content-Type'),
      },
    };
  } catch (e) {
    console.log(e);

    return {
      statusCode: 500,
      body: `error: ${e}`,
    };
  }

  // return {
  //   body: {
  //     rest,
  //   },
  // };
}
