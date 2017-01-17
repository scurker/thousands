# thousands [![Build Status](https://travis-ci.org/scurker/thousands.svg?branch=master)](https://travis-ci.org/scurker/thousands) [![npm](https://img.shields.io/npm/v/thousands.svg?style=flat)](https://www.npmjs.com/package/thousands)

A micro javascript library for formatting numbers with thousands separator.

#### Why should I use this over [Number.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)?

`Number.toLocaleString()` isn't supported in some browsers (< Safari 9, < IE 11), or if you're running in an older node environment (< 0.12) i18n support is not included. In most cases you will likely want to use `Number.toLocaleString()`, but this library allows you to format numbers no matter what your environment supports.

## Install

```
$ npm install --save thousands
```

## Usage

```js
const thousands = require('thousands');

thousands(1234);      // => 1,234
thousands(123456);    // => 123,456
thousands('1234.56'); // => 1,234.56

thousands(1234, ' ');      // => 1 234
thousands(123456, ' ');    // => 123 456
thousands('1234.56', ' '); // => 1 234.56

```

## License

MIT © [Jason Wilson](http://scurker.com)