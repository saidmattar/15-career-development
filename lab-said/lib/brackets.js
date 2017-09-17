'use strict';

let balancedParens = function(str) {
  let stack = [];
  let open = { '{': '}', '[': ']', '(': ')' };
  let closed = { '}': true, ']': true, ')': true };

  for (let i = 0; i < str.length; i ++) {
    let chr = str[i];
    if (open[chr]) {
      stack.push(chr);
    } else if (closed[chr]) {
      if (open[stack.pop()] !== chr) return false;
    }
  }

  return stack.length === 0;
};

balancedParens('{[()]}');

function Queue () {
  this.pushS = new Stack();
  this.popS = new Stack();
}

Queue.prototype.enqueue = function (val) {
  this.pushS.push(val);
};

Queue.prototype.dequeue = function () {
  let poping = this.popS;
  let pushing = this.pushS;

  if (poping.top) {
    let deq = poping.pop();
    console.log('Dequeing ' + deq + ' from stack.');
    return deq;
  }

  while (pushing.top) {
    poping.push(pushing.pop());
  }
};


let q1 = new Queue();
q1.enqueue(3);
q1.enqueue(4);
q1.enqueue(5);
q1.enqueue(6);
q1.enqueue(7);
q1.dequeue();
q1.dequeue();
q1.dequeue();
