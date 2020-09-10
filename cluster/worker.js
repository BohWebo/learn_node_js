const http = require('http');
const pid = process.pid;

http
    .createServer((req, res) => {
        res.end('hello from ' + pid);
    })
    .listen(8000, () => {
        console.log(`Server stared on http://localhost:8000, PID: ${pid}`);
    });
