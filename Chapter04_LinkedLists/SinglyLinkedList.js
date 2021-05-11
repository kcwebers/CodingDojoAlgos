class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SLList{
    constructor(){
        this.head = null
    }

    addToFront(value) {
        var node = new Node(value);
        node.next = this.head;
        this.head = node;
        return this;
    }

    // given a value, add it to the back of your singly linked list
    // what if the list is empty?
    addToBack(value) {
        var node = new Node(value);
        if(!this.head) {
            this.head = node;
        }
        var runner = this.head;
        while(runner.next) {
            runner = runner.next;
        }
        runner.next = node;
    }

    // given a value, print whether the list contains that value
    contains(value) {
        if(!this.head) {
            return false;
        }
        var runner = this.head;
        while(runner) {
            if(runner.value === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    
    // remove the first node in the list
    removeFromFront() {
        // your code here
    }

    // remove the last node in the list
    removeFromBack() {
        // your code here
    }
    
    // print the singly linked list
    printValues() {
        if(!this.head) {
            console.log("There's nothing in this list!");
        }
        var runner = this.head;
        while(runner) {
            console.log(`${runner.value} --> `);
            runner = runner.next;
        }
    }

}

const sll = new SLList();
sll.addToFront(3)
sll.addToFront(2)
sll.addToFront(1)
sll.addToBack(4)
sll.addToBack(5)
sll.contains(5) // prints true
sll.contains(6) // prints false
console.log("==========================================")
sll.printValues()