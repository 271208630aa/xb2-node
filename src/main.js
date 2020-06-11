const express = require('express');

const app = express();

const port = 3000;

/**
 *  使用JSON格式的插件
 */

app.use( express.json());


app.listen(port, () => {

    console.log('服务已启动')
});

app.get('/', (req, res) => {
    res.send('你好');
})

const data = [
    {
        id: 1,
        title: 'title1',
        content: 'content1'
    },
    {
        id: 2,
        title: 'title2',
        content: 'content2'
    },
    {
        id: 3,
        title: 'title3',
        content: 'content3'
    }
];

app.get('/posts', (req, res) => {
    res.send(data);
});

app.get('/posts/:postId', (req, res) => {

    const { postId } = req.params;

    const posts = data.filter(item => item.id == postId);
    res.send(posts[0]);
});

app.post('/posts', (req, res) => {
    const {content} = req.body;

    //设置响应状态码
    res.status(201);

    // 输出请求头部数据
    console.log(req.headers['sing-along']);

    // 设置头部数据
    res.set('Sing-Along', 'How I wonder what you are!')

    res.send({
        message: `成功创建了内容：${content}`
    });
});