export default async function hello(ctx, next){
  await next();
  ctx.body = 'so boring here';
}
