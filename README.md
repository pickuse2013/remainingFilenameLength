# remainingFilenameLength

`remainingFilenameLength` is a program that calculates the maximum allowable filename length based on the maximum path length of the current operating system. You can provide a path to the program, and it will calculate the maximum filename length that you can use. The program currently supports Windows and MacOS and has been tested extensively.

## Usage

To use `remainingFilenameLength`, simply provide a path to the program:

```js
const remainingFilenameLength = require('remainingFilenameLength');

const path = '/Users/pickuse/xxxxxxxxx/';
const remainingLength = remainingFilenameLength(path);

console.log(`remaining file name Length: ${remainingLength}`);
```

The program will then output the maximum allowable filename length for the given path.

## Compatibility

`remainingFilenameLength` has been tested on the following operating systems:

- Windows 11
- MacOS Monterey 12.6.5

## License

This program is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.