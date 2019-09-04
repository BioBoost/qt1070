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
