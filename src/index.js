import Koa from 'koa';
import KoaRouter from '@koa/router';
import server from 'koa-static';
import {
  getImmortalList,
  addImmortal,
  checkImmortal,
} from './controller/Users';
import Parser from 'koa-bodyparser';
import cors from 'koa-cors';

const parser = new Parser();
const router = new KoaRouter();
const app = new Koa();

app.use(parser);

app.use(cors());

app.use(server('./build'));

router.get('/api/getimmortal', getImmortalList);

router.get('/api/addimmortal/:name', addImmortal);

router.get('/api/checkimmortal/:name', checkImmortal);

app.use(router.routes());

app.listen(9090, () => {
  console.log('application started!');
});
