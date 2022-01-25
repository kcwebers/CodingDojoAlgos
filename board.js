class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a stack operates on the principal of "First In, Last Out" like a pringles can
class SLStack{
    constructor() {
        this.top = null // this.head equivalent
    }

    
    // add a given value to your stack
    push(value){
        var newNode = new Node(value);
        // if(!this.top) {
        //     this.top = newNode;
        // } else {
        newNode.next = this.top;
        this.top = newNode;
        return this;
        // }
    }
    
    // remove and return the top value
    pop(){
        // if there's nothing in the stack, then what?
        if (!this.top) {
            console.log("This stack is empty!");
            return this;
        }
        var removed = this.top;
        this.top = this.top.next;
        removed.next = null;
        return removed.value;
    }

    // return (don't remove) the top value of a stack
    returnTop() {
        return !this.top ? null : this.top.value;

        // if(!this.top) {
        //     console.log("This stack is empty!")
        //     return null
        // } else {
        //     return this.top.value
        // }
    }

    printStack() {
        var runner = this.top;
        while(runner != null) {
            console.log(`The current value is: ${runner.value}`);
            runner = runner.next;
        }
        return this;
    }

    stackSize() {
        var runner = this.top;
        // var size = 0;
        // while(runner != null) {
        //     runner = runner.next;
        //     size += 1;
        // }
        // return size;
        var counter = 1;
        // run through entire list and count each value
        while(runner.next != null) {
            // print the value
            counter += 1;
            // iterate your runner
            runner = runner.next;
        }
        console.log(counter);
        return counter;

    }
}

var sls = new SLStack()
sls.push(3);
sls.push(18);
sls.push(12);
sls.push(78);
sls.push(56);
console.log(sls.pop());
console.log(sls.returnTop());
sls.printStack();
console.log(sls.stackSize());