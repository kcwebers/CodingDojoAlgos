class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    addToBack(value) {
        var newNode = new Node(value);
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

// Given a linked list, return true/false based on whether or not there is a loop in the list.

    hasLoop() {
        if(this.head == null || this.head.next == null) {
            return false; // if only 1 node in list or no list, then no loop
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

// Additional algo #1 : find the start of the loop!
// Additional algo #2 : break the loop!

//   printValues() {
//       var runner = this.head;
//      console.log("the head is: " + runner.val);
//        while (runner){
//            console.log("Current Node Value: " + runner.val + " -->");
//            runner = runner.next;
//        }
//    }

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

var list = new SLL();
list.addToBack(4);
list.addToBack(-12);
list.addToBack(43);
list.addToBack(8);
list.addToBack(67);
list.addToBack(-27);
list.addToBack(19);

var runner = this.head;
var sprinter = this.head;
while(runner.val != 67) { // run runner part way through the list and stop
    runner = runner.next;
}
while(sprinter.next != null) { // run sprinter through whole list
    sprinter = sprinter.next;
}
sprinter.next = runner; // point sprinter at same node as runner, so list should have a loop

list.printValues();
console.log("========================");

var list2 = new SLL();
list2.addToBack(4);
list2.addToBack(-12);
list2.addToBack(43);
list2.addToBack(8);
list2.addToBack(67);
list2.addToBack(-27);
list2.addToBack(19);
list2.printValues();

// =========================== 
// Student Solutions
// =========================== 

constructor(){
    this.head = null;
    this.count = 0;
}

addToFront(value){
    var newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.count++;
}

addToBack(value) {
    var newNode = new Node(value);
    if(!this.head) {
        this.head = newNode;
        this.count++;
    } else {
        var runner = this.head;
        while (runner.next){
            runner = runner.next;
        }
        runner.next = newNode;
        this.count++;
    }
}

hasLoop() {
    if (this.head == null) {
        return false;
    }
    let runner = this.head;
    let counter = 1;
    while (runner) {
        if (counter > this.count) {
            return true;
        }
        counter++;
        runner = runner.next;
    }
    return false;
}

// =========================== 

addLoop() {
    let runner = this.head;
    let front = this.head;
    while (runner.next != null) {
        runner = runner.next;
    }
    runner.next = front;
}

hasLoop() {
    let runner = this.head;
    let nodeArray = [this.head];
    if (runner.next == null) {
        return false;
    }
    while (runner.next != null) {
        for (let i = 1; i < nodeArray.length; i++) {
            if (runner.next == nodeArray[i]) {
                console.log(nodeArray);
                return true;
            }
        }
        nodeArray.push(runner)
        runner = runner.next;
    }
    return false;
}

// =========================== 

createLoop(value){
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
    newNode.next = this.head;
}

hasLoop() {
    let memDict = {};
    if(this.head == null){
        return false;
    }
    var runner = this.head
    while(runner.next){
        if(memDict[runner.value]){
            let testNodes = memDict[runner.value]
            for(let i = 0; i < testNodes.length; i++){
                if ( testNodes[i] === runner){
                    return true;
                }
            }
            testNodes.push(runner);
        }
        else{
            memDict[runner.value] = [runner];
        }
        runner = runner.next;
        console.log(memDict);
    }
    return false
    // store locations for each value
    // inside of each value is an array of nodes
    // when value exhists in dict, iterate over node array
}

// =========================== 

hasLoop() {
    var runner = this.head;
    var sprinter = this.head.next;

    while (sprinter != null) {
        if (runner == sprinter) {
            console.log("This is an infinite loop");
            return true;
        }
        runner = runner.next;
        sprinter = sprinter.next.next;
    }
    return false;
}