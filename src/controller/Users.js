import { AppCode } from '../config';

let immortalList = [];

export function getImmortalList(ctx, next) {
  ctx.body = {
    code: AppCode.Success,
    data: immortalList,
  };
}

export function addImmortal(ctx, next) {
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

export function checkImmortal(ctx, next) {
  const name = ctx.params.name;
  const index = immortalList.findIndex((item) => item === name);

  ctx.body = {
    code: AppCode.Success,
    data: index >= 0,
  };
}
