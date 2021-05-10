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
        // your code here
    }

    // given a value, print whether the list contains that value
    contains(value) {
        // your code here
    }
    
    // print the singly linked list
    printValues() {
        // your code here
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