import fs from 'fs';
import zip from 'zlib';

const rs = fs.createReadStream('./readFileSync.js');
const ws = fs.createWriteStream('./copy.gz');
const gzip = zip.createGzip();

rs.pipe(ws); // way to copy file
rs.pipe(gzip).pipe(ws); // way to copy and archive file

rs.on('data', chunk => {
    console.count('data');
    console.log(chunk.toString())
});


rs.on('readable', () => {
    console.count('readable');
    const buffer = rs.read();

    console.dir({buffer});
    if (buffer) console.log(buffer.toString());
});
