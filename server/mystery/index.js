export default async function mystery(ctx, next){
  await next();
  ctx.body = { message:'Welcome to Mysteryland!'};
}
