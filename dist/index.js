(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('koa'), require('@koa/router'), require('koa-static'), require('koa-bodyparser'), require('koa-cors')) :
  typeof define === 'function' && define.amd ? define(['koa', '@koa/router', 'koa-static', 'koa-bodyparser', 'koa-cors'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Koa, global.KoaRouter, global.server, global.Parser, global.cors));
}(this, (function (Koa, KoaRouter, server, Parser, cors) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Koa__default = /*#__PURE__*/_interopDefaultLegacy(Koa);
  var KoaRouter__default = /*#__PURE__*/_interopDefaultLegacy(KoaRouter);
  var server__default = /*#__PURE__*/_interopDefaultLegacy(server);
  var Parser__default = /*#__PURE__*/_interopDefaultLegacy(Parser);
  var cors__default = /*#__PURE__*/_interopDefaultLegacy(cors);

  const AppCode = {
    Success: 'AppCode.Success',
    Error: 'AppCode.Error',
  };

  let immortalList = [];

  function getImmortalList(ctx, next) {
    ctx.body = {
      code: AppCode.Success,
      data: immortalList,
    };
  }

  function addImmortal(ctx, next) {
    const name = ctx.params.name;
    const index = immortalList.findIndex((item) => item === name);

    if (index >= 0) {
      ctx.body = {
        code: AppCode.Error,
        message: '讲武堂用户名重复',
      };
      return next();
    }

    immortalList.push(name);
    ctx.body = {
      code: AppCode.Success,
      message: '添加成功',
    };
  }

  function checkImmortal(ctx, next) {
    const name = ctx.params.name;
    const index = immortalList.findIndex((item) => item === name);

    ctx.body = {
      code: AppCode.Success,
      data: index >= 0,
    };
  }

  const parser = new Parser__default['default']();
  const router = new KoaRouter__default['default']();
  const app = new Koa__default['default']();

  app.use(parser);

  app.use(cors__default['default']());

  app.use(server__default['default']('./build'));

  router.get('/api/getimmortal', getImmortalList);

  router.get('/api/addimmortal/:name', addImmortal);

  router.get('/api/checkimmortal/:name', checkImmortal);

  app.use(router.routes());

  app.listen(9090, () => {
    console.log('application started!');
  });

})));
