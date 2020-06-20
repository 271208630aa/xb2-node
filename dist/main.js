"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.json());
app.listen(port, () => {
    console.log('服务已启动');
});
app.get('/', (req, res) => {
    res.send('你好');
});
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
    const posts = data.filter(item => item.id == parseInt(postId, 10));
    res.send(posts[0]);
});
app.post('/posts', (req, res) => {
    const { content } = req.body;
    res.status(201);
    console.log(req.headers['sing-along']);
    res.set('Sing-Along', 'How I wonder what you are!');
    res.send({
        message: `成功创建了内容：${content}`
    });
});
//# sourceMappingURL=main.js.map