const os = require('os');

function remainingFilenameLength(path) {
    let maxLength;

    // 根據作業系統設定最大路徑長度限制
    if (os.platform() === 'win32') {
        maxLength = 260;
    }

    if (os.platform() === 'darwin') { 
        maxLength = 1024;
    }

    // 計算剩餘可用檔名字元長度
    const remainingLength = maxLength - path.length;

    return remainingLength;
}

module.exports = remainingFilenameLength;