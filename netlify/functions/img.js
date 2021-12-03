import { builder } from '@netlify/functions';
import fetch from 'node-fetch';

const API_ROOT = process.env.VITE_MEDIA_URL;

/**
 request (query params don't work)
 http://localhost:8888/img/q_auto,f_auto,c_scale,w_1500/blog/start-layout.png
 */

async function handler(event) {
  const prefix = '/img/'; // need to be stripped of the path
  const url = `${API_ROOT}${event.path.substring(prefix.length)}`;
  try {
    const req = await fetch(url, {
      headers: {
        accept: event.headers.accept,
      },
    });
    const res = await req.arrayBuffer();
    return {
      statusCode: 200,
      body: Buffer.from(res)
        .toString('base64'),
      isBase64Encoded: true,
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
};

exports.handler = builder(handler);
