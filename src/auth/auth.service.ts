import jwt from "jsonwebtoken";
import { PRIVATE_KEY } from "../app/app.config";
import { connection } from "../app/database/mysql";

/**
 * 签发信息
 */
interface SignTokenOptions {
  payload?: any;
}

export const signToken = (options: SignTokenOptions) => {
  // 准备选项
  const { payload } = options;

  // 签发 JWT (被签发的数据， 签发的密钥， 签发的算法)
  const token = jwt.sign(payload, PRIVATE_KEY, { algorithm: "RS256" });

  // 提供 JWT
  return token;
};

interface PossessOption {
  resourceId?: number;
  resourceType?: string;
  userId: number;
}

export const possess = async (possessOption: PossessOption) => {
  // 数据解构
  const { resourceId, resourceType, userId } = possessOption;

  // 准备查询
  const statement = ` select count(${resourceType}.id) ct from ${resourceType}  where ${resourceType}.id = ? and userId = ? `;
  console.log(possessOption);
  console.log(statement);

  const [data] = await connection
    .promise()
    .query(statement, [resourceId, userId]);

  //提供查询结果
  return data[0].ct ? true : false;
};
