function SLNode(val){
    this.val = val;
    this.next = null;
}

function SLL() {
    this.head = null;

    this.addToFront = function(val){
        var oldHead = this.head;
        this.head = new Node(val);
        this.head.next = oldHead;
        return this;
    }
    
    this.addToBack = function(val){
        // your code here
    }

    this.contains = function(val){
        // your code here
    }

    this.printAsArray = function(){
        var runner = this.head;
        var arr = [];
        while (runner){
            arr.push(runner.val);
            runner = runner.next;
        }
        console.log(arr);
        return this;
    }
}

var sll = new SLL();
sll.addToFront(3).addToFront(2).addToFront(1);
console.log(sll);
// SLL {
// head: Node { val: 1, next: Node { val: 2, next: [Object] } },
// addFront: [Function],
// printAsArray: [Function] }
sll.printAsArray(); // [ 1, 2, 3 ]