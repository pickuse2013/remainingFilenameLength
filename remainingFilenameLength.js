const os = require('os');
const path = require('path');

function remainingFilenameLength(inputPath) {
    let maxLength;

    // windows file length limit is 255
    // windows full path length limit is 260

    // mac file length limit is 255
    // mac full path length limit is 1024

    const dirPath = path.dirname(inputPath);

    // 根據作業系統設定最大路徑長度限制
    if (os.platform() === 'win32') {
        maxLength = 260;
    }

    if (os.platform() === 'darwin') {
        maxLength = 1024;
    }

    // 計算剩餘可用檔名字元長度
    const remainingLength = maxLength - dirPath.length;

    return remainingLength;
}

module.exports = remainingFilenameLength;