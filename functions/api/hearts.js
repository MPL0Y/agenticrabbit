const json = (n) => Response.json({ n: n ?? 0 });

export const onRequestGet = async ({ env }) => json(await env.DB.prepare('SELECT n FROM hearts').first('n'));

export const onRequestPost = async ({ env }) => json(await env.DB.prepare('UPDATE hearts SET n = n + 1 RETURNING n').first('n'));
