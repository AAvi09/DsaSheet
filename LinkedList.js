const myLinkedList = {
  value: 10,
  next: {
    value: 5,
    next: {
      value: 16,
      next: null,
    },
  },
};

console.log(myLinkedList);

class LinkedList {
  constructor(value) {
    this.head = {
      value: 10,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    (this.tail.next = newNode), (this.tail = newNode), this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
    };
    this.head = newNode;
    this.length++;
  }
  printlist() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return;
    if (index === 0) {
      this.prepend(value);
      return this.printlist();
    }
    if (index >= this.length) {
      this.append(value);
      return this.printlist();
    }
    const newNode = {
      value: value,
      next: null,
    };
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    console.log(this.printlist());
    return this.printlist();
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      console.log(this.printlist());
    }
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;
    this.length--;
    console.log(this.printlist());
    return this.printlist();
  }
  reverse(head) {
    let previous = null;
    let current = this.head;
    let next = null;
    while (current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
    console.log(this.printlist());
    return this.head;
  }
}

const brandNewLinkedList = new LinkedList(10);
brandNewLinkedList.append(5);
brandNewLinkedList.append(12);
brandNewLinkedList.prepend(20);
brandNewLinkedList.insert(3, 99);
brandNewLinkedList.insert(2, 39);
brandNewLinkedList.remove(3);
brandNewLinkedList.reverse();
console.log(brandNewLinkedList);

//LINKED LIST CYCLE QUESTION

var hasCycle = function (head) {
  if (head === null) return false;
  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
};
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function createLinkedList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
}
