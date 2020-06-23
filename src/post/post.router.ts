import * as postController from "./post.controller";

import express from "express";

import { requestUrl } from "../app/app.middleware";
const router = express.Router();

/**
 * 内容类别
 */

router.get("/posts", requestUrl, postController.index);

/**
 * 导出路由
 */

export default router;
