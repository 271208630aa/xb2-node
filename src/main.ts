import app from "./app";

import { APP_PORT } from "./app/app.config";

import { connection } from "./app/database/mysql";

app.listen(APP_PORT, () => {
  console.log("服务已启动");
  connection.connect((err) => {
    if (err) {
      console.log("数据库链接失败", err.message);
      return;
    }
    console.log("数据库链接成功~~~");
  });
});
