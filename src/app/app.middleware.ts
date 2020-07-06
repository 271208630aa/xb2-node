import { Request, Response, NextFunction } from "express";

/**
 * 输出请求地址
 */
export const requestUrl = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log(request.url);
  next();
};

/**
 * 默认异常处理器
 */
export const defaultErrorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error.message) {
    console.log("发生错误：", error.message);
  }
  let statusCode: number, message: String;
  switch (error.message) {
    case "NAME_IS_REQUIRED":
      statusCode = 400;
      message = "请输入用户名";
      break;
    case "PASSWORD_IS_REQUIRED":
      statusCode = 400;
      message = "请输入密码";
      break;
    case "NAME_IS_EXISTS":
      statusCode = 409;
      message = "该用户已被注册";
      break;

    case "USER_DOSE_NOT_EXIST":
      statusCode = 400;
      message = "用户不存在";
      break;

    case "PASSWORD_DOES_NOT_MATCH":
      statusCode = 400;
      message = "密码有误";
      break;
    case "UNAUTHORIZED":
      statusCode = 401;
      message = "请先登录";
      break;
    case "USER_DOES_NOT_OWN_RESOURCE":
      statusCode = 403;
      message = "您不能处理这个内容";
      break;

    default:
      statusCode = 500;
      message = "服务暂时出了点问题~~~";
      break;
  }
  response.status(statusCode).send({ message });
};
