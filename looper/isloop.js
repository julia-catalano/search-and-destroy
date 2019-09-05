'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let tortoise = linkedlist.head;
  let hare = linkedlist.head.next;

  while (tortoise.next !== null) {
    if (tortoise.next === hare.next) return true

    hare = hare.next;

    if (hare === linkedlist.tail) {
      tortoise = tortoise.next
      hare = tortoise.next.next
    }
  }

  return false
};




/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
