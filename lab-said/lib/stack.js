'use strict';

const Node = require('./node');

module.exports = class {
  constructor(maxSize) {
    this.top = null;
  }

  push(val) {
    let node = new Node(val);

    if(!this.top){
      this.top = node;
      return this.top;
    }

    node.next = this.top;
    this.top = node;
    return;
  }

  pop(){

  }
}
