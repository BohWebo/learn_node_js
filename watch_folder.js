import fs from 'fs';
const {promises: fsAsync} = fs;

const changes = [];

const display = files => {
    while (changes.length > 10) changes.shift();

    console.log('Changes:');
    for (const item of changes) {
        console.log(item.date.toISOString(), item.event, ':', item.file);
    }
    console.log('\nFiles:');
    for (const file of files) {
        console.log(file);
    }
};

const ls = async (path) => {
    const files = await fsAsync.readdir(path);
    display(files);
};

const watch = (path) =>
    fs.watch(path, (event, file) => {
        console.clear();
        changes.push({date: new Date(), event, file});
        ls(path);
    });


ls('./');
watch('./');
