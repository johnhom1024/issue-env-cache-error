import fs from 'fs-extra';
const name = process.env.NAME || 'default';

// write name to file
fs.outputFileSync('./dist/name.txt', name);
