'use strict';

const Node = require('./node');

module.exports = class {
  constructor(maxSize) {
    this.top = null;
  }

  //O(1)
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
  //O(1)
  pop(){
    if(!this.top) return;
    let result = this.top;
    if(!result.next) {
      this.top = null;
      return this.top;
    }
  }

  //o(1)
  peek(node) {
    if(!node.next) {
      return node.val;
    }
  }
};
