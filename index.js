const remainingFilenameLength = require('./remainingFilenameLength.js');

// const path = 'C:\\Users\\picku\\Documents\\01_53g給選手_v2\\01_53g給選手_v2\\a';
const path = '/Users/pickuse/Documents/sssss';
const remainingLength = remainingFilenameLength(path);

console.log(`剩餘可用檔名字元長度: ${remainingLength}`);

// create file at path

const fs = require('fs');
const filename = 'a'.repeat(255 - 4) + '.txt';
const content = 'Hello World!';
// const fullPath = `${path}\\${filename}`;
const fullPath = `${path}/${filename}`;

fs.writeFile(fullPath, content, (err) => {
    if (err) {
        console.error(err);
    }

    console.log(`檔案 ${filename} 已建立`);
});