'use strict';

module.exports = class App {

  constructor() {
    this.y = 3;
  }

  doStuff(x) {
    return x*this.y;
  }

}