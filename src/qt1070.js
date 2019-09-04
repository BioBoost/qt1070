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

  status() {
    return this.read_register(registers.STATUS);
  }

  keys() {
    return (this.read_register(registers.KEYSTATE) & 0x7F);
  }

  acquisition_time(setting) {
    this.write_register(registers.LOW_POWER_MODE, setting);
  }

  max_on_before_calibration(setting) {
    this.write_register(registers.LOW_POWER_MODE, setting);
  }

  reset() {
    this.write_register(registers.RESET, 0xFF);
  }

  calibrate() {
    this.write_register(registers.CALIBRATE, 0xFF);
  }

  //////////////////////
  // Internal methods //
  //////////////////////

  read_register(register) {
    return this.i2c.readByteSync(Qt1070.ADDRESS, register);
  }

  write_register(register, value) {
    this.i2c.writeByteSync(Qt1070.ADDRESS, register, value);
  }

}

module.exports = Qt1070;