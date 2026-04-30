export async function onRequest(context) {
  const { env, request } = context;
  const key = 'visitor_count';
  const url = new URL(request.url);
  const inc = url.searchParams.get('inc') === '1';
  let count = parseInt((await env.VISITOR_COUNTER.get(key)) || '0');
  if (inc) {
    count++;
    await env.VISITOR_COUNTER.put(key, count.toString());
  }
  return new Response(JSON.stringify({ count }), {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  });
}
