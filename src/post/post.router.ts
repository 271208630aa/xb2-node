import * as postController from "./post.controller";

import express from "express";

import { requestUrl } from "../app/app.middleware";
const router = express.Router();

/**
 * 内容类别
 */

router.get("/posts", requestUrl, postController.index);

/**
 * 创建内容接口
 */
router.post("/posts", postController.store);

/**
 * 更新内容
 */

router.post("/posts/:postId", postController.update);

/**
 * 删除内容
 */
router.delete("/posts/:postId", postController.destroy);

/**
 * 导出路由
 */

export default router;
