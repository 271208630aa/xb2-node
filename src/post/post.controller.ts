import { Request, Response, NextFunction } from "express";
import * as postService from "./post.service";

/**
 * 内容列表
 */
export const index = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (request.headers.authorization !== "SECRET") {
    return next(new Error());
  }
  let data = postService.getPosts();
  response.send(data);
};
