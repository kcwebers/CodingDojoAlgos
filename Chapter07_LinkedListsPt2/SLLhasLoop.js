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