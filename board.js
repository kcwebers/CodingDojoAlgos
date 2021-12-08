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
        // console.log("currentNode = " + currentNode.value)
        // console.log("nextNode = " + nextNode.value)
        // console.log("prevNode = " + prevNode)

        while(currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
            // console.log("currentNode = " + currentNode?.value)
            // console.log("nextNode = " + nextNode?.value)
            // console.log("prevNode = " + prevNode.value)
            // console.log("--------------------------")
        }
        this.head = prevNode;
    }

    // Given a linked list, return true/false based on whether or not there is a loop in the list.

    // part 1 : make an algo or standalone logic that will construct a loop in your SSL (can be hard coded for now)

    createLoop() {
        if(this.head == null) {
            return false; // if only 1 node in list or no list, then no loop
        } else if(this.head.next == null) {
            this.head.next = this.head;
        }

        var size = 0;
        var runner = this.head;
        while(runner.next) {
            size += 1;
            runner = runner.next;
        }

        var halfwayish = Math.floor(size/2);
        var looper = this.head;
        while(halfwayish > 0) {
            looper = looper.next;
            halfwayish -= 1;
        }
        runner.next = looper;
    }

    // part 2 : return whether or not there is a loop

    hasLoop() {
        if(this.head == null) {
            return false; // if only 1 node in list or no list, then no loop
        } else if(this.head.next == this.head) {
            return true;
        }
        
        var runner = this.head; // will move 1 space
        var sprinter = this.head; // will move 2 spaces
        
        while(sprinter && sprinter.next) { // run based on the sprinter because they will hit null first
            sprinter = sprinter.next.next;
            runner = runner.next;
            if(sprinter == runner) {
                return true;
            }
        }
        return false;
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

    // OPTIONAL CHALLENGE
    // Flatten Children: Alter your SLL Node class to contain a .child that either points to null or to the head of another list. Each node in that .child might have a pointer to another SLL and so on. Rearrange the .next pointers to flatten the hierarchy into aone linear list.

    flatten() {
        // your code here
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
