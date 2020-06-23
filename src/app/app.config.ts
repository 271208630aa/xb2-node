import dotenv from "dotenv";

/**
 * 载入.env 里面设置的环境变量
 */
dotenv.config();

/**
 * 应用配置
 */

export const { APP_PORT } = process.env;
