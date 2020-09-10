const cluster = require('cluster');
const os = require('os');
const pid = process.pid;

if (cluster.isMaster) {
    const cups = os.cpus().length;

    for (let i = 0; i < cups - 1; i++) {
        cluster.fork();
    }

    console.log(`master process started, pid: ${pid}`);
} else {
    require('./worker.js');
}
