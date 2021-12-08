class SLNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    addToFront(value){
        var newNode = new SLNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    addToBack(value) {
        var newNode = new SLNode(value);
        if(!this.head) {
            this.head = newNode;
        } else {
            var runner = this.head;
            while (runner.next){
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }

    // Shift List: Given a number, shift the nodes of a list to the right by that given number. 
    // This is a circular shift, for example:

    // 4 --> -12 --> 43 --> 8 --> 67 --> null
    // shiftBy(1) ==> 67 --> 4 --> -12 --> 43 --> 8 --> null

    // 4 --> -12 --> 43 --> 8 --> 67 --> null
    // shiftBy(3) ==> 43 --> 8 --> 67 --> 4 --> -12 --> null

    // removeFromBack w/ removed node as returned value
    removeFromBack() {
        // set runner to start at the beginning of list
        var runner = this.head;
        // run all the way through this list until you hit the second to last item and stop
        while(runner.next.next != null) {
            runner = runner.next
        }
        // mark the node being removed
        var removed = runner.next;
        // set runner.next to null, effectively removing final node from the list
        runner.next = null;
        return removed;
    }

    addNodeToFront(node) {
        node.next = this.head;
        this.head = node;
    }

    shiftBy(num) {
        if (!this.head || this.head.next == null) {
            console.log("There is nothing to shiftBy!");
        }

        for(let i = 0 ; i < num ; i++) {
            this.addNodeToFront(this.removeFromBack());
        }
        return this;
    }

    printValues() {
        var runner = this.head;
        let str = "";
        while (runner) {
            str += `${runner.value} -> `;
            runner = runner.next;
        }
        str += 'null';
        console.log(str);
    }
}

//   4 --> -12 --> 43 --> 8 --> 67 --> null
var list = new SLL();
list.addToBack(4);
list.addToBack(-12);
list.addToBack(43);
list.addToBack(8);
list.addToBack(67);
console.log("========================")
list.printValues();
console.log("========================")
list.shiftBy(3);
list.printValues();

// ====================================
// Studetn Solutions
// ====================================


shiftBy(num) {
    let runner = this.head;
    let prevNode;
    for (let i = 0; i < num; i++) {
        while (runner.next != null) {
            prevNode = runner;
            runner = runner.next;
        }
        prevNode.next = null;
        runner.next = this.head;
        this.head = runner;
    }
}

// ====================================

shiftBy(num) {
    let count = 0;
    let runner = this.head;
    let prevNode = null;
    while(count < num){
        while(runner.next!=null){
            prevNode = runner;
            runner = runner.next;
        }
    prevNode.next = null;
    let temp = runner;//67
    temp.next = this.head;
    this.head = temp;
    count++;
    }
}


