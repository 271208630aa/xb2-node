import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as userService from "../user/user.service";
import { PUBLIC_KEY } from "../app/app.config";
import { TokenPayload } from "./auth.interface";

/**
 * 验证用户登录数据
 */

export const validateLoginData = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { name, password } = request.body;

  console.log("验证用户登录数据");

  if (!name) {
    return next(new Error("NAME_IS_REQUIRED"));
  }

  if (!password) {
    return next(new Error("PASSWORD_IS_REQUIRED"));
  }

  //验证用户名
  const user = await userService.getUserByName(name, { password: true });
  if (!user) {
    return next(new Error("USER_DOSE_NOT_EXIST"));
  }

  //验证用户密码
  const matched = await bcrypt.compare(password, user.password);
  if (!matched) {
    return next(new Error("PASSWORD_DOES_NOT_MATCH"));
  }

  request.body.user = user;

  next();
};

/**
 * 验证用户身份
 */
export const authGuard = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log("验证用户身份");
  try {
    //提前 Authorization
    const authorization = request.header("Authorization");
    if (!authorization) {
      throw new Error();
    }

    // 提取 JWT 令牌
    const token = authorization.replace("Bearer ", "");
    if (!token) {
      throw new Error();
    }

    //验证令牌
    const decoded = jwt.verify(token, PUBLIC_KEY, { algorithms: ["RS256"] });

    //在请求里面添加当前用户
    request.user = decoded as TokenPayload;

    next();
  } catch (error) {
    next(new Error("UNAUTHORIZED"));
  }
};
