const http = require('http');

const server = http.createServer((request, reponse) => {
    reponse.write('hello!');
    reponse.end();
});

server.listen(3000, () => {
    console.log('服务已启动！')
})