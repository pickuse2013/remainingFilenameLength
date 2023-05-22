const os = require('os');
const path = require('path');

function remainingFilenameLength(inputPath) {
    let maxLength;
    let maxFilenameLength = 255;

    // windows file length limit is 255
    // windows full path length limit is 260

    // mac offical file length limit is 255
    // mac offical full path length limit is 1024
    // mac actual full path length limit is 767 (nodejs)
    // mac actual full path length limit is 1023 (finder)

    const dirPath = path.dirname(inputPath);

    // 根據作業系統設定最大路徑長度限制
    if (os.platform() === 'win32') {
        maxLength = 260;
    }

    if (os.platform() === 'darwin') {
        maxLength = 1024;

        // mac actual file length limit is 767
        maxFilenameLength = 767;
    }

    // 計算剩餘可用檔名字元長度
    const remainingLength = maxLength - dirPath.length;
    
    return remainingLength;
    // return Math.min(remainingLength, maxFilenameLength);
}

module.exports = remainingFilenameLength;