// singly linked lists
// ListNode class: we'll be using this
​
class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
​
// var x = new ListNode(7);
​
// var y = new ListNode(3);
// x.next = y;
​
// var z = new ListNode(29);
// y.next = z;
​
// console.log(y);
​
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // addToFront - adds a node with the given value to the head of the list
    addToFront(value) {
        var new_node = new ListNode(value);
​
        // if list is empty
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }
​
        // otherwise
        else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }
    // addToBack - adds a node with the given value to the tail of the list
    addToBack(value) {
        var new_node = new ListNode(value);
​
        // if list is empty
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }
​
        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
    }
    // contains - returns true if target is in the linked list (as a node value),
    // false otherwise
    contains(target) {
        var runner = this.head;
​
        while (runner != null) {
​
            if (runner.value == target) {
                return true;
            }
​
            runner = runner.next;
        }
​
        return false;
    }
    
    // display()
    // return a string with the value of every node from the
    // linked list - like "3 - 7 - 13 - 4 - 8"
    display() {
​
        if (this.head == null) {
            return null;
        }
​
        var output = this.head.value;
        var runner = this.head.next;
​
        while (runner != null) {
            output += " - " + runner.value;
            runner = runner.next;
        }
​
        return output;
    }
​
    // removeFront() - remove the head of the linked list and return its value
    // that means that this.head is going to change as well
    // is there a special case for if the linked list only has two nodes? one node?
    // zero nodes????????
​
    removeFront() {
​
        if (this.head == null) {
            return null;
        }
        // else if (this.head.next == null)
        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }
​
        var temp = this.head
        this.head = this.head.next
        temp.next = null 
​
        return temp.value
​
    }
​
    // removeBack() - remove the tail of the linked list and return its value
    // again, this means this.tail will change
    // as above - is there a special case for linked lists with a minimal number of
    // nodes inside them?
​
    removeBack() {
​
        if (this.head == null) {
            return null;
        }
​
        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }
​
        let runner = this.head;
        while (runner != this.tail) {
            if (runner.next == this.tail) {
                let getBack = this.tail;
                this.tail = runner;
                runner.next = null;
                return getBack.value;
            }
            runner = runner.next;
        }
    }
​
    // findMinNode() - find the node in the linked list with the lowest value
    // and return that node - the node itself, not its value
    // if you find two or more nodes tied for that value,
    // return the first one you find
    findMinNode() {
        if (this.head == null) {
            return null;
        }
        if(this.head.next == null) {
            return this.head.value;
        }
​
        var runner = this.head;
        var currentMin = runner;
        while (runner != null) {
​
            if (runner.value < currentMin.value) {
                currentMin = runner;
            }
​
            runner = runner.next;
        }
​
        return currentMin;
    }
​
    // findMaxNode() - find the node in the linked list with the highest value
    // and return that node - the node itself, not its value
    // if you find two or more nodes tied for that value,
    // return the first one you find
    findMaxNode() {
        if (this.head == null) {
            return null;
        }
        if(this.head.next == null) {
            return this.head.value;
        }
​
        var runner = this.head;
        var currentMax = runner;
        while (runner != null) {
​
            if (runner.value > currentMax.value) {
                currentMax = runner;
            }
​
            runner = runner.next;
        }
​
        return currentMax;
    }
​
    // secondToLast() - return the value of the second-to-last node in
    // the linked list
    // what should you do if the list has less than two nodes?
    secondToLast() {
        if (this.head == null || this.head == this.tail) {
            return null;
        }
​
        else if (this.head.next == this.tail) {
            return this.head.value;
        }
​
        let runner = this.head;
        while (runner != this.tail) {
            if (runner.next == this.tail) {
                return runner.value;
            }
            runner = runner.next;
        }
    }
}
​
// generateNewList(length, min_value, max_value) -> creates a new SLL of the
// given length, with nodes containing values from min_value up to max_value
// some random integers may be helpful here
​
function generateNewList(length = 10, min_value = 0, max_value = 10) {
    var new_sll = new SinglyLinkedList();
​
    for (var i = 0; i < length; i++) {
        var value = Math.round((Math.random() * (max_value - min_value)) + min_value);
        new_sll.addToBack(value);
    }
​
    return new_sll;
}
​
var new_sll = generateNewList(length = 0, min_value = -10, max_value = 10);
console.log(new_sll.display());
// console.log(new_sll.findMinNode().value);
// console.log(new_sll.findMaxNode().value);
console.log(new_sll.findMinNode());
console.log(new_sll.findMaxNode());
console.log(new_sll.secondToLast());