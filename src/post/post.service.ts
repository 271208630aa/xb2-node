import { connection } from "../app/database/mysql";
import { PostModel } from "./post.model";
/**
 * 获取内容列表
 */

export const getPosts = async () => {
  const statement = `select a.id, a.title, a.content, JSON_OBJECT('id', b.id, 'name', b.name) user from posts a left join user b on a.userid = b.id`;
  const [data] = await connection.promise().query(statement);
  console.log(data);
  if (data instanceof Array) {
    data.forEach((obj) => {
      if (obj["user"]) {
        obj["user"] = JSON.parse(obj["user"]);
      }
    });
  }
  return data;
};

/**
 * 创建内容
 * @param post
 */
export const createPost = async (post: PostModel) => {
  //准备查询
  const statement = `insert into posts set ?`;

  //执行查询
  const [data] = await connection.promise().query(statement, post);

  // 提供数据
  return data;
};

/***
 * 更新内容
 */
export const updatePost = async (postId: number, post: PostModel) => {
  const statement = `update posts set ? where id = ?`;

  //执行查询
  const [data] = await connection.promise().query(statement, [post, postId]);
  return data;
};

/**
 * 删除内容
 */
export const deletePost = async (postId: number) => {
  const statement = `delete from posts where id = ?`;

  //执行删除
  const [data] = await connection.promise().query(statement, postId);
  return data;
};
