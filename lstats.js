import {promises as fs} from 'fs';

const files = ['package.json', 'aaa.js', 'readFileAsync.js'];
const stats = [];

const asyncIterate = async (fileName, i) => {
    try {
        const stat = await fs.lstat(fileName);
        stats.push({fileName, ...stat});
    } catch (e) {
        console.log(`${fileName} not found`);
    }

    if (i === files.length - 1) console.dir({stats});
};

const setStats = (fileName, i, stat) => {
    stats.push({fileName, ...stat});

    if (i === files.length - 1) console.dir({stats});
};
const handleError = (fileName, i) => {
    console.log(`${fileName} not found`);

    if (i === files.length - 1) console.dir({stats});
};
const promiseIterate = (fileName, i) => {
    fs.lstat(fileName)
        .then(setStats.bind(null, fileName, i))
        .catch(handleError.bind(null, fileName));
};

files.forEach(promiseIterate);
