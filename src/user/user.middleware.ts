import { Request, Response, NextFunction } from "express";
import * as userService from "./user.service";
import bcrypt from "bcrypt";

export const validateUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { name, password } = request.body;

  if (!name) {
    return next(new Error("NAME_IS_REQUIRED"));
  }

  if (!password) {
    return next(new Error("PASSWORD_IS_REQUIRED"));
  }

  //验证用户名
  const user = await userService.getUserByName(name, {});
  if (user) {
    return next(new Error("NAME_IS_EXISTS"));
  }

  next();
};

/**
 * HASH 密码
 * @param request
 * @param response
 * @param next
 */
export const hashPassword = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  //准备数据
  const { password } = request.body;

  console.log(`password : ${password}`);

  // HASH 密码
  request.body.password = await bcrypt.hash(password, 10);

  //下一步
  next();
};
