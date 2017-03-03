// log request
export default function logger(){
	return  async function logger(ctx, next){
		console.log(
		`	
		Date: ${new Date()},
		Method: ${ctx.request.method},
		URL: ${ctx.request.host + ctx.request.url}`);
	  await next();
  }
}
