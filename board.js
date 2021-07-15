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
        if(this.head == null) {
            this.head = node;
        }
        var runner = this.head;
        while(runner.next != null) {
            runner = runner.next;
        }
        runner.next = node;
        return this;
    }

    // takes in a value and a location, add a node to the list with the input value BEFORE the given location
    prependValue(loc, val) {
        var node = new Node(val);
        if(!this.head) {
            this.head = node;
            return this; 
        }
        if(loc === 1) {
            // this.addToFront(value);
            node.next = this.head;
            this.head = node;
        } 
        var count = 1;
        var runner = this.head;
        while(count+1 < loc && runner.next != null) {
            runner = runner.next;
            count ++;
        }
        node.next = runner.next;
        runner.next = node;
        return this;
    }

    // takes in a value and a location, add a node to the list with the input value AFTER the given location
    appendValue(loc, val) {
        var node = new Node(val);
        if(!this.head) {
            this.head = node;
            return this; 
        } 
        var count = 1;
        var runner = this.head;
        while(count < loc && runner.next != null) {
            runner = runner.next;
            count ++;
        }
        node.next = runner.next;
        runner.next = node;
        return this;
    }
    
    // print the singly linked list
    printValues() {
        if(this.head == null) {
            console.log("There's nothing in this list!");
            return this;
        }
        var runner = this.head;
        while(runner != null) {
            console.log(`${runner.value} --> `);
            // console.log(runner.value + " --> ");
            runner = runner.next;
        }
        return this;
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
sll.printValues()
console.log("==========================================")
sll.appendValue(2, 15)
sll.printValues()
console.log("==========================================")
sll.prependValue(2, 15)
sll.printValues()

