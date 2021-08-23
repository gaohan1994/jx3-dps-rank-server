import Koa from 'koa';
import KoaRouter from '@koa/router';
import server from 'koa-static';

const router = new KoaRouter();
const app = new Koa();

app.use(server('./build'));

app.use(router.routes());

app.listen(9090, () => {
  console.log('application started!');
});
