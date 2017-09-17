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
    return this.top;
  }

  pop(){
    if(!this.top) return;
    let result = this.top;
    if(!result.next) {
      this.top = null;
      return this.top;
    }
  }

  peek(node) {
    if(!node.next) {
      return node.val;
    }
  }
};
