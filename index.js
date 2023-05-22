const remainingFilenameLength = require('./remainingFilenameLength.js');

const path = 'C:\\Users\\picku\\Documents\\01_53g給選手_v2\\01_53g給選手_v2\\a';
const remainingLength = remainingFilenameLength(path);

console.log(`剩餘可用檔名字元長度: ${remainingLength}`);

// create file at path
// windows file length limit is 255
// windows full path length limit is 260
const fs = require('fs');
const filename = 'a'.repeat(remainingLength + 41 + 2 + 1) + '.txt';
const content = 'Hello World!';
const fullPath = `${path}\\${filename}`;

fs.writeFile(fullPath, content, (err) => {
    if (err) {
        console.error(err);
    }

    console.log(`檔案 ${filename} 已建立`);
});