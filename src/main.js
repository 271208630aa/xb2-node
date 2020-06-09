const express = require('express');

const app = express();

const port = 3000;

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
})