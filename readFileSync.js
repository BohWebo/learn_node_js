import fs from 'fs';

const buffer = fs.readFileSync('readFileSync.js', 'utf8');
const src = buffer.toString();

console.log(`buffer length - ${buffer.length}`);
console.log('buffer ---> \n', buffer);

const lines = src
    .split('\n')
    .filter(line => line);

fs.writeFileSync('./test_write_file.js', lines.join('\n'));
console.dir(lines);


