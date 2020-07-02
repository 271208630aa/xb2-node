import { Request, Response, NextFunction } from "express";
import { signToken } from "./auth.service";

export const userLogin = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  //准备数据
  const {
    user: { id, name },
  } = request.body;

  //签发令牌
  try {
    const payload = { id, name };

    const token = signToken({ payload });
    response.send({
      id,
      name,
      token,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * 验证登录
 */
export const validate = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log(request.user);

  response.sendStatus(200);
};
