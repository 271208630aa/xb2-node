import { Request, Response, NextFunction } from "express";
import * as authService from "./auth.service";

export const userLogin = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  //准备数据
  const { name, password } = request.body;
  console.log(name, password);
  response.send(`{"message":"欢迎回来,${name}"}`);
};
