const registers = {
  CHIP_ID: 1,
  STATUS: 2,
  KEYSTATE: 3,
  LOW_POWER_MODE: 54,
  MAX_ON: 55,
  CALIBRATE: 56,
  RESET: 57
};

class Qt1070 {

  constructor(i2c) {
    this.i2c = i2c;
  }

}

module.exports = Qt1070;