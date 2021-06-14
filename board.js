class SLNode{
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
        var newNode = new SLNode(value)
        if(this.head == null) {
            // this means there's nothing in the list
            this.head = newNode;
        }
        newNode.next = this.head
        this.head = newNode
    }

    // given a value, add it to the back of your singly linked list
    // what if the list is empty?
    addToBack(value) {
        var newNode = new SLNode(value) //creating new instance of a node with the given value
        if(this.head == null) {
            // this means there's nothing in the list
            this.head = newNode;
        }
        var runner = this.head
        while(runner.next != null) {
            runner = runner.next
        }
        runner.next = newNode
    }

    // given a value, print and return whether the list contains that value
    contains(value) {
        if(this.head == null) {
            console.log("False - this list is empty!")
            return false
        }
        var runner = this.head
        while(runner.next != null) {
            if(runner.value == value) {
                console.log("True - found the value!")
                return true
            }
            runner = runner.next
        }
        console.log("False - made it through the list and didn't find anything!")
        return false
    }

    // print the singly linked list
    printValues() {
        if(this.head == null) {
            console.log("This list is empty!")
        }
        var runner = this.head
        while(runner.next != null) {
            console.log(`This node's value : ${runner.value} and the next node is ${runner.next}`)
            runner = runner.next
        }
    }
}

const sll = new SLList();
sll.addToFront(3)
sll.addToFront(2)
sll.addToFront(1)
sll.addToBack(4)
sll.addToBack(5)
console.log("==========================================")
sll.printValues()
console.log("==========================================")
sll.contians(6)
sll.contians(2)