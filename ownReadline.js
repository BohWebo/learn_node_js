const write = (data) => process.stdout.write(data);
const read = (cb) => process.stdin.on('data', (chunk) => cb(chunk.toString().trim()));


write('What are your name stranger? ');

read((name) => {
    write(`Hello, ${name}`);

    process.exit(0);
});



