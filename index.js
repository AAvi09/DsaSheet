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
}

const brandNewLinkedList = new LinkedList(10);
brandNewLinkedList.append(5);
brandNewLinkedList.append(12);
brandNewLinkedList.prepend(20);
console.log(brandNewLinkedList);
