import { read } from '$app/server';
import fileFoo from '$lib/server/foo.txt';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const foo = await read(fileFoo).text();

	return new Response(foo);
};
