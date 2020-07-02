import express from "express";
import * as authController from "./auth.controller";
import { validateLoginData, authGuard } from "./auth.middleware";
import { hashPassword } from "../user/user.middleware";

const router = express.Router();

/**
 * 用户登录
 */

router.post(
  "/login",
  validateLoginData,
  hashPassword,
  authController.userLogin
);

/**
 * 定义验证登录接口
 */

router.post("/auth/validate", authGuard, authController.validate);

/**
 * 导出路由
 */

export default router;
