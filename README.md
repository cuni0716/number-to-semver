# Number to Semantic Version

## Install
```bash
$ npm install number-to-semver
```

## Usage
```js
const numberToSemver = require("number-to-semver");

numberToSemver(0);     // "0.0.0"
numberToSemver(1);     // "0.0.1"
numberToSemver(10);    // "0.0.10"
numberToSemver(15);    // "0.0.15"
numberToSemver(100);   // "0.1.0"
numberToSemver(151);   // "0.1.51"
numberToSemver(1234);  // "1.2.43"
numberToSemver(12345); // "12.3.45"
```
