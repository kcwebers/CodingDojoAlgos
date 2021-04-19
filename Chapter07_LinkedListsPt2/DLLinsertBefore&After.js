class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    // given a value, add a node containing that value to the end of your DLL
    addToBack(value) {
        var node = new Node(value);
        if(this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }

    // Given and value and index, insert a Node of that value before the given index
    insertBefore(value, index) {
        var node = new Node(value)
        if(!this.head) {
            console.log("List does not exist yet!");
            this.head = node;
            this.tail = node;
        }
        var count = 0;
        var runner = this.head;
        while (runner.next != null) {
            if(count == index) {
                node.next = runner;
                runner.prev.next = node;
                runner.prev = node;
                node.prev = runner.prev;
                break;
            }
            runner = runner.next;
            count ++;
        }
    }

    // Given and value and index, insert a Node of that value after the given index
    insertAfter(value, index) {
        var node = new Node(value)
        if(!this.head) {
            console.log("List does not exist yet!");
            this.head = node;
            this.tail = node;
        }
        var count = 0;
        var runner = this.head;
        while (runner.next != null) {
            if(count == index) {
                node.next = runner.next;
                runner.next.prev = node;
                runner.next = node;
                node.prev = runner;
                break;
            }
            runner = runner.next;
            count ++;
        }
    }

    // given a DLL reverse the list
    // NOT JUST swapping head and tail but also reverse the next and prev pointers
    reverseList() {
        if(!this.head) {
            console.log("List does not exist yet!");
        }
        var runner = this.head;
        while (runner) {
            var temp = runner.next;
            runner.next = runner.prev;
            runner.prev = temp;
            runner = runner.prev;
        }
        var temp = this.head;
        this.head = this.t
    }

    // prints the items of a DLL from front to back
    printValuesForward() {
        var runner = this.head;
        if(this.head == null) {
            console.log("The list is empty!");
        } else {
            var str = "Starting at the head : "
            while(runner){
                str += `${runner.val} -> `;
                runner = runner.next;
            }
        }
        console.log(str);
    }
}

list = new DLL();
list.addToFront(3);
list.addToFront(6);
list.addToFront(9);
list.addToFront(12);
list.addToFront(15);
list.addToFront(18);
list.printValuesForward();
console.log("=====================");
list.insertBefore(-9, 3);
list.printValuesForward();
console.log("=====================");
list.insertAfter(45, 1);
list.printValuesForward();