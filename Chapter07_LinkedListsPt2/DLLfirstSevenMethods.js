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

    // given a value, add a node containing that value to the front of your DLL
    addToFront(value) {
        var node = new Node(value);
        if(this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
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

    // remove the first node in a DLL
    removeFromFront() {
        if(this.head == null) {
            console.log("This list is empty!");
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
    }

    // remove the last node in a DLL
    removeFromBack() {
        if(this.head == null) {
            console.log("This list is empty!");
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
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
     
    // prints the items of a DLL from back to front
    printValuesBackward() {
        var runner = this.tail;
        if(this.tail == null) {
            console.log("The list is empty!");
        } else {
            var str = "Starting at the tail : "
            while(runner){
                str += `${runner.val} -> `;
                runner = runner.prev;
            }
        }
        console.log(str);
    }

    // return the length of a given DLL
    lengthOfList() {
        var runner = this.head;
        var length = 0;
        while (runner) {
            length += 1;
            runner = runner.next;
        }
        return length;
    }
}

list = new DLL();
list.addToFront(3);
list.addToFront(6);
list.addToFront(9);
list.addToFront(12);
list.addToBack(15);
list.addToBack(18);
list.printValuesForward();
console.log(list.lengthOfList());
console.log("=====================");
list.printValuesBackward();
console.log("=====================");
list.removeFromBack();
list.removeFromFront();
list.printValuesForward();
console.log("=====================");
console.log(list.lengthOfList());





