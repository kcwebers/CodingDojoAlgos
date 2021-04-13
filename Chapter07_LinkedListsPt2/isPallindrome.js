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

// Return whether a list is a palindrome. For this, you can assume that the data stored in your SLL is entirely comprised of characters at each Node. Palindromes read the same front-to-back and back-to-front. Return true or false after comparing values.

// For a harder challenge, try not to use any additional data structures! 

    isPallindrome() {
        if(!this.head){
            print("The list is empty!");
            return false;
        } else {
            var str = ""; // declare an empty string, so then we can add to it
            var runner = this.head; // start the runner at the head of the list
            while(runner) { // while the runner isn't null, keep moving through the list and adding to str
                str += runner.val;
                runner = runner.next;
            }

            var l = 0; // index from start of str
            var r = str.length - 1; // index from end of str

            while(l < r) {
                if( str[l] != str[r]) {
                    return false;
                }
                l += 1
                r -= 1
            }
            // alt loop:
            // for(var i = 0 ; i < str.length/2 ; i++) {
            //    if(str[i] != str[str.length-i-1]) {
            //        return false;
            //    }
            // }
            return true;
        }
    }


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
list.addToBack('t');
list.addToBack('a');
list.addToBack('c');
list.addToBack('o');
list.addToBack('c');
list.addToBack('a');
list.addToBack('t');
list.printValues();
list.isPallindrome();
console.log(list.isPallindrome());
console.log("========================");
var list1 = new SLL();
list1.addToBack('f');
list1.addToBack('i');
list1.addToBack('n');
list1.addToBack('a');
list1.addToBack('l');
list1.addToBack('l');
list1.addToBack('y');
list1.printValues();
console.log(list1.isPallindrome());