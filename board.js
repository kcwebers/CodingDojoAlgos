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
        // loop to move through the list
        var runner = this.head
        while(runner.next != null) {
            runner = runner.next
        }
        runner.next = newNode
    }

    // locate the node with the min (lowest) value, move it to the front of the list
    minToFront() {
        var minNode = this.head
        var runner = this.head
        var beforeRunner = this.head
        while(runner.next != null) {
            if(runner.next.value < minNode.value) {
                minNode = runner.next
                beforeRunner = runner
            }
            runner = runner.next
        }
        beforeRunner.next = minNode.next
        minNode.next = this.head
        this.head = minNode

    }

    // locate the node with the max (highest) value, move it to the back/end of the list
    maxToBack() {
        var maxNode = this.head
        var runner = this.head
        var beforeRunner = this.head
        while(runner.next != null) {
            if(runner.next.value > maxNode.value) {
                maxNode = runner.next
                beforeRunner = runner
            }
            runner = runner.next
        }
        beforeRunner.next = maxNode.next
        runner.next = maxNode
        maxNode.next = null
    }

    // find and return the second to last value in your SLL
    secondToLast() {
        if(this.head == null || this.head.next == null) {
            console.log("This list isn't long enough!")
            return this
        }
      var runner = this.head
        while(runner.next.next != null) {
            runner = runner.next
        }
        console.log(`The second to last value is ${runner.value}`)
        return this
    }

    // given a list of integers, remove the negative values from the list
    removeNegatives() {
        if(this.head == null) {
            console.log("There's nothing in this list!")
            return this
        }
        while(this.head.value < 0) {
            this.head = this.head.next
        }
        var runner = this.head
        while(runner.next != null) {
            if(runner.next.value < 0) {
                runner.next = runner.next.next
                
            } else {
                runner = runner.next
            }
        }
        return this
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
        while(runner != null) {
            console.log(`This node's value : ${runner.value} and the next node is ${runner.next}`)
            runner = runner.next
        }
    }
}

const sll = new SLList();
sll.addToFront(-3)
sll.addToFront(2)
sll.addToFront(41)
sll.addToBack(48)
sll.addToBack(-5)
sll.addToBack(-15)
sll.addToBack(14)
console.log("==========================================")
sll.printValues()
console.log("==========================================")
sll.removeNegatives()
sll.printValues()
console.log("==========================================")
sll.secondToLast()