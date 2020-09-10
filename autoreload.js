const fs = require('fs');

const {promises: asyncFs} = fs;

const load = async (path) => {
    const buffer = await asyncFs.readFile(path);

    console.log(`Buffer length - ${buffer.length}`);
    console.log(`File ===> \n ${buffer.toString()}`);
};

const watch = path =>
    fs.watch(path, (event, file) => {
        console.dir({event, file});

        load(path);
    });

const fileName = './readFileSync.js';

load(fileName);
watch(fileName);
