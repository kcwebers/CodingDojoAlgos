class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addToFront(value) {
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    addToBack(value) {
        var newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            var runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }

    // Given a Singly Linked List of Nodes, reverse the order of the list
    //           this.head
    // Example:      4 --> -12 --> 43 --> 8 --> 67 --> -27 --> 19 --> null
    //           this.head
    // Becomes:     19 --> -27 --> 67 --> 8 --> 43 --> -12 --> 4 --> null

    reverseList() {
        if (!this.head || this.head.next == null) {
            console.log("There's no list to reverse!");
        }

        var currentNode = this.head;
        var nextNode = this.head.next;
        var prevNode = null;

        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        this.head = prevNode;
    }

    // =================================
    //  student solutions
    // =================================

    reverseList() {
        if (this.head == null || this.head.next == null) {
            return;
        }

        let runner = this.head;
        let nextNode = runner.next;
        this.head = null;
        while (runner != null) {
            runner.next = this.head;
            this.head = runner;
            runner = nextNode;
            nextNode = nextNode?.next;
        }
        return;
    }

    // =================================

    reverseListInPlace() {
        let count = 0;
        let length = 0;
        let runner = this.head
        while (runner !== null) {
            length++;
            runner = runner.next;
        }
        length--;
        while (count <= Math.floor(length / 2)) {
            let start = this.head;
            let end = this.head;
            for (let i = 0; i < count; i++) {
                start = start.next;
            }
            for (let i = 0; i < length - count; i++) {
                end = end.next;
            }
            let temp = start.value;
            start.value = end.value;
            end.value = temp;
            count++;
        }
    }

    // =================================

    reverseList() {
        // // your code here
        // let newList = new SLL();
        // let runner = this.head;
        // while(runner != null){
        //     newList.addToFront(runner.value);
        //     runner = runner.next;
        // }
        // this.head = newList.head;

        // In place code
        let sprinter = this.head.next;
        let runner = this.head;
        let walker = null;
        while (sprinter != null) {
            runner.next = walker;
            walker = runner;
            runner = sprinter;
            sprinter = sprinter.next;
        }

        runner.next = walker;
        this.head = runner;

    }

    // =================================

    reverseList() {
        // your code here
        let newList = new SLL();
        let runner = this.head;
        while (runner != null) {
            newList.addToFront(runner.value);
            runner = runner.next;
        }
        this.head = newList.head;
    }

    // =================================
    //  end student solutions
    // =================================

    printValues() {
        var runner = this.head;
        let str = "";
        while (runner) {
            if (runner.next) {
                str += `${runner.val} -> `;
            } else {
                str += runner.val;
            }
            runner = runner.next;
        }
        console.log(str);
    }

}

//   4 --> -12 --> 43 --> 8 --> 67 --> -27 --> 19 --> null
var list = new SLL();
list.addToBack(4);
list.addToBack(-12);
list.addToBack(43);
list.addToBack(8);
list.addToBack(67);
list.addToBack(-27);
list.addToBack(19);
console.log("========================")
list.printValues();
console.log("========================")
list.reverseList();
list.printValues();



