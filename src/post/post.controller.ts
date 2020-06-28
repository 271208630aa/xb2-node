import { Request, Response, NextFunction } from "express";
import * as postService from "./post.service";

import _ from "lodash";

/**
 * 内容列表
 */
export const index = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  /*  if (request.headers.authorization !== "SECRET") {
    return next(new Error());
  } */
  try {
    let data = await postService.getPosts();
    response.send(data);
  } catch (error) {
    next(error);
  }
};

/**
 * 创建内容
 */

export const store = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  //准备数据
  const { title, content } = request.body;
  try {
    const data = await postService.createPost({ title, content });
    response.status(201).send(data);
  } catch (error) {
    next(error);
  }
};

export const update = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  //获取更新内容ID
  const { postId } = request.params;

  //准备数据
  //const { title, content } = request.body;
  // 利用lodash 挑选值： 被挑选的对象中没有该属性，则结果中不产生该属性（只更新有值的数据）
  const post = _.pick(request.body, ["title", "content"]);

  //更新
  try {
    const data = await postService.updatePost(parseInt(postId, 10), post);
    response.send(data);
  } catch (error) {
    next(error);
  }
};

export const destroy = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  //获取内容ID
  const { postId } = request.params;
  try {
    const data = await postService.deletePost(parseInt(postId, 10));
    response.send(data);
  } catch (error) {
    next(error);
  }
};
