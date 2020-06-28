import dotenv from "dotenv";

/**
 * 载入.env 里面设置的环境变量
 */
dotenv.config();

/**
 * 应用配置
 */

export const { APP_PORT } = process.env;

/**
 * 数据仓库配置
 */

export const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;
