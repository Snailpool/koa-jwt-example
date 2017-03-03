export default async function mystery(ctx, next){
  await next();
  ctx.body = 'Welcome to Mysteryland!';
}
