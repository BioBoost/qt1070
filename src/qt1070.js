const registers = {
  CHIP_ID: 0,
  STATUS: 2,
  KEYSTATE: 3,
  LOW_POWER_MODE: 54,
  MAX_ON: 55,
  CALIBRATE: 56,
  RESET: 57
};

class Qt1070 {
  static ADDRESS = 0x1b;

  constructor(i2c) {
    this.i2c = i2c;
  }

  chip_id() {
    return this.read_register(registers.CHIP_ID);
  }

  //////////////////////
  // Internal methods //
  //////////////////////

  read_register(register) {
    return this.i2c.readByteSync(Qt1070.ADDRESS, register);
  }

}

module.exports = Qt1070;