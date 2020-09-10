const fs = require('fs').promises;


(async () => {
        const buffer = await fs.readFile('readFileAsync.js');
        const src = buffer.toString();
        console.log(`buffer length - ${buffer.length}`);
        console.log('buffer ---> \n', buffer);

        const lines = src
            .split('\n')
            .filter(line => line);
        console.dir(lines);

        await fs.writeFile('./test_write_file.js', lines.join('\n'));
})();
