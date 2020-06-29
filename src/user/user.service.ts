import { connection } from "../app/database/mysql";

import { UserModel } from "./user.model";

/**
 * 创建用户
 */

export const createUser = async (user: UserModel) => {
  // 准备查询
  const statement = `insert into user set ?`;

  //执行查询
  const [data] = await connection.promise().query(statement, user);
  return data;
};

/**
 * 按照用户名查找用户
 */
export const getUserByName = async (name: string) => {
  const statement = `select * from user where name = ? `;

  const [data] = await connection.promise().query(statement, name);

  return data[0];
};
