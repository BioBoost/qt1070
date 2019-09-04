# Touch QT1070 Library

NodeJS Driver library for the QT1070 touch sensor. Currently only tested on the Raspberry Pi 3.

Single key detection only since QT1070 does not support multikey.

## Dependencies

This library makes use of:

* [i2c-bus](https://www.npmjs.com/package/i2c-bus) to communicate with i2c devices

## Example

The i2c object needs to be injected via the constructor.

A basic example:

```js
const Qt1070 = require('qt1070');
const i2c = require('i2c-bus');

const i2c1 = i2c.open(1, (err) => {
  if (err) throw err;
  console.log("Opened i2c bus successfully");

  let touch = new Qt1070(i2c1);

  console.log(`Chip id = ${touch.chip_id()}`);
  console.log(`Status = ${touch.status()}`);
  
  setInterval(() => {
    console.log(`Keys = ${touch.keys()}`);
  }, 50);
});
```
