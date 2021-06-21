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

    // takes in a value and a location, add a node to the list with the input value BEFORE the given location
    prependValue(value, location) {
        var node = new Node(value);
        if(!this.head) {
            this.head = node;
            return this; 
        }
        if(location === 1) {
            // this.addToFront(value);
            node.next = this.head;
            this.head = node;
        } 
        var count = 1;
        var runner = this.head;
        while(count+1 < location && runner.next != null) {
            runner = runner.next;
            count ++;
        }
        node.next = runner.next;
        runner.next = node;
        return this;
    }

    // takes in a value and a location, add a node to the list with the input value AFTER the given location
    appendValue(value, location) {
        var node = new Node(value);
        if(!this.head) {
            this.head = node;
            return this; 
        } 
        var count = 1;
        var runner = this.head;
        while(count < location && runner.next != null) {
            runner = runner.next;
            count ++;
        }
        node.next = runner.next;
        runner.next = node;
        return this;
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
        if(!this.head) {
            console.log("There is no list!");
            return null;
        }
        var headToRemove = this.head;
        var newHead = this.head.next;

        this.head = newHead;
        headToRemove.next = null;
    }

    // remove the last node in the list
    removeFromBack() {
        if(!this.head) {
            console.log("There is no list!");
            return null;
        } 
        if(this.head.next == null) {
            this.head = null;
            console.log("The list is now empty!")
        }
        var runner = this.head;
        while(runner.next.next != null) {
            runner = runner.next;
        }
        runner.next = null;
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
sll.addToFront(-3)
sll.addToFront(-122)
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
