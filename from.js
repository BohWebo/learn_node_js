

const b1 = Buffer.from([1,2,3,4,5]);
console.log(b1);

const b2 = Buffer.from('qwe-qwe-qwe');
console.log(b2);

for (const [i, c] of b2.entries()) {
    const char = String.fromCharCode(c);
    console.log({i, c, char})
}

console.log('hex', b2.toString('hex'));
console.log('base64', b2.toString('base64'));
console.log('utf-8', b2.toString('utf-8'));
console.log('binary', b2.toString('binary'));
