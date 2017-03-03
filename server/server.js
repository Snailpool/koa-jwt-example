import Koa from 'koa';
import mount from 'koa-mount';
import bodyParser from 'koa-bodyparser';

import logger from './lib/logger';
import auth from './authenticate/index';
import normal from './normal/index';
import mystery from './mystery/index';

const app = new Koa();


app.use(logger());
app.use(bodyParser());

// for everymount one
app.use(('/public', normal));

// someone want to login  here
app.use(mount('/authenticate', auth.authenticate()));

// verify before someone want to enter Mysteryland
app.use(mount('/mystery', auth.authSuccess()));
// if someone has authentication, he/she counld enter this mystery world
app.use(mount('/mystery', mystery));



app.listen(3000);