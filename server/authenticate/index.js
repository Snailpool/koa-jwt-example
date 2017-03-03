import jwt from 'jsonwebtoken';
import config from '../config/index';

// check if this user has right
function authenticate(){
	return async function authenticate(ctx, next){
		const user = ctx.request.body;

		// should replace with encrypt/crypt and db identity verify method.
		if(user.name === 'dodo' && user.password === 'abcde'){
			const payload = {
				userid: 1
			};
			ctx.body = {
				token: jwt.sign(payload, config.secret)
			};
		}
		else{
			ctx.throw(401, 'You are not the one !');
		}
		await next();
	}
}

// verify the token  
function authSuccess(){
	return async function isAuthenticate(ctx, next){
		if(ctx.header.authorization){
			const authInfo = ctx.header.authorization.split(' ');
			if (authInfo[0] === 'Bearer' && authInfo[1]) {
				try{
					jwt.verify(authInfo[1], config.secret);
				}
				catch(err){
					ctx.throw(401, 'You are the fake one');
				}
			}
		}
		else{
			ctx.throw(401, 'Authentication fail QQ');
		}
		await next();
	}
}
const auth = { authenticate, authSuccess}
export default auth;