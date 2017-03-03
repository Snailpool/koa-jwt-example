export default async function hello(ctx, next){
  await next();
  ctx.body = { message:'Welcome to Pretty boring land !'};
}
