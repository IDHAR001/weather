const http = require('http');
const url = require('url');
const fs = require('fs');
const express = require('express')
const app = express();

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.send('hello!')
})
app.listen(port, () => {return console.log('runnning with ' + port);
})
// const server = http.createServer((request, response) => {
//     response.setHeader('content-type', 'text/html;charset=utf-8');
//     // let resMethod = request.method;
//     let{method} = request;
//     let {url} = request;

//     // 获取url路径
//     let {pathname} = new URL(request.url, 'http://127.0.0.1' || 'https://v2ray0.azurewebsites.net');
//     let filePath = __dirname + '/page' + pathname;
//     // 读取文件 fs 异步 api
//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             response.statusCode = 500;
//             response.end('html文件读取失败')
//             return;
//         }
//         response.end(data);
//     });

// })
// server.listen(port, () => {
//     console.log('启动成功...');
// })