const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8');
    // let resMethod = request.method;
    let{method} = request;
    let {url} = request;
    if (method === 'GET' && url === '/login') {
        request.on('data', chunk => {
            console.log(chunk);
        });
        request.on('end', () => {
            response.end('登录页面');
        });
    } else if (method === 'GET' && url === '/reg') {
        request.on('data', chunk => {
            console.log(chunk);
        });
        request.on('end', () => {
            response.end('注册页面');
        });
    } else {
        response.end('Not Found');
    }
})
server.listen(3000, () => {
    console.log('启动成功...');
})