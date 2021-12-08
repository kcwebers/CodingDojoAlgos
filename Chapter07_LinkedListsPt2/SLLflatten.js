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
list.flatten();
list.printValues();

// ====================================
// Student Solutions
// ====================================

flatten() {
    let runner = this.head;
    while(runner.next != null){
        if(runner.child){
            let temp = runner.next;
            let child = runner.child;
            console.log("child", child);
            runner.next = child.head;
            let childRunner = child.head
            while(childRunner.next != null){
                childRunner = childRunner.next;
            }
            childRunner.next = temp;
            runner.child = null;
        }
        runner = runner.next;
    }
}

// ====================================

flatten(){
    let runner =this.head;
    let finalHolder;
    if(!this.head){
        return null;
    }
    while(runner){
        if(runner.child){
            let nextHolder = runner.next;
            let endOfChild = runner.child.flatten();
            runner.next=runner.child.head;
            runner.child=null;
            runner = endOfChild;
            runner.next = nextHolder
        }
        if(runner.next==null){
            finalHolder=runner;
        }
        runner=runner.next;
    }
    return finalHolder;
}