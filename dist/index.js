(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('koa'), require('@koa/router'), require('koa-static')) :
  typeof define === 'function' && define.amd ? define(['koa', '@koa/router', 'koa-static'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Koa, global.KoaRouter, global.server));
}(this, (function (Koa, KoaRouter, server) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Koa__default = /*#__PURE__*/_interopDefaultLegacy(Koa);
  var KoaRouter__default = /*#__PURE__*/_interopDefaultLegacy(KoaRouter);
  var server__default = /*#__PURE__*/_interopDefaultLegacy(server);

  const router = new KoaRouter__default['default']();
  const app = new Koa__default['default']();

  app.use(server__default['default']('./build'));

  app.use(router.routes());

  app.listen(9090, () => {
    console.log('application started!');
  });

})));
