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
        // step #1) create an instance of a Node, using the input value
        var nn = new Node(value);
        // // step #1a [EDGE CASE]) check the edge case of nothing in your list
        // if(this.head == null) {
        //     // set this.head equal to whatever node I've created
        //     this.head = nn
        //     // return 'this' to end function and allow chaining of methods
        //     return this
        // }
        // step #2) point our node into the list
        nn.next = this.head
        // step #3) move the head pointer to the correct location
        this.head = nn
        // return 'this' to end function and allow chaining of methods
        return this
    }

    // given a value, add it to the back of your singly linked list
    // what if the list is empty?
    addToBack(value) {
        // step #1) create an instance of a Node, using the input value
        var nn = new Node(value);
        // step #1a [EDGE CASE]) check the edge case of nothing in your list
        if(this.head == null) {
            console.log("Nothing in list, so simply add to this.head")
            // set this.head equal to whatever node I've created
            this.head = nn
            // return 'this' to end function and allow chaining of methods
            return this
        }
        // step #2) traverse to the location where you want to add the node (aka, the final node in the list)
        var runner = this.head;

        while(runner.next != null) {
            runner = runner.next
        }
        // step #3) change runner's .next pointer, to point at our new node
        runner.next = nn
        // return 'this' to end function and allow chaining of methods
        return this
    }



    // print the singly linked list
    printValues() {
        // step #0 [EDGE CASE]) handle a case where there is nothing in the list
        if(this.head == null){
            console.log("There's nothing in the list! Dummy!")
            // return 'this' to end function and allow chaining of methods
            return this
        }
        //step #1) establish a runner to traverse through the list
        var runner = this.head;

        // NOTE: we can move runner all the way into null because our loop will exit as soon as runner hits null, avoiding any errors with printing
        while(runner != null) {
            // step #2) print the values at each iteration before moving the runner!
            console.log(`The current value is: ${runner.value}`)
            runner = runner.next
        }
        console.log("We have hit the end of the list!")
        // return 'this' to end function and allow chaining of methods
        return this
    }

    // removes the first item in your list
    removeFromFront() {
        if(this.head == null) {
            console.log("There's nothing in the list! Nothing can be removed!")
            // return 'this' to end function and allow chaining of methods
            return this
        }
        // if we simply move out head pointer over, that creates a new entry point to our list 
        // we cannot traverse backwards!
        this.head = this.head.next

        return this;
        // ** See altRemoveFromFront() for a slightly different approach!
    }
    // removes the first item in your list
    altRemoveFromFront() {
        if(this.head == null) {
            console.log("There's nothing in the list! Nothing can be removed!")
            // return 'this' to end function and allow chaining of methods
            return this
        }

        // an additional 'edge case like' scenario:
        // if we access the previous node in some other way, it would have access to the list
        // to rememedy this, we can point the original head away from the list in addition to moving the head pointer

        // store the original head in a temp variable
        var temp = this.head
        // move the heqad pointer to the next locations
        this.head = this.head.next
        // point the temp variable's .next out to null
        temp.next = null

        // the order in which these things happen is important! suggest drawing it out and following the steps to see :)
        return this;
    }

    // removes the last item in your list
    removeFromBack() {
        // this handles 2 edge cases: nothing in list, and only 1 item in list
        if(this.head == null || this.head.next == null) {
            console.log("List is too short! Cannot remove from back")
            // return 'this' to end function and allow chaining of methods
            return this
        }
        // ** alternate edge case handling, handles if there is only 1 items in the list or no items separately
        // if(this.head == null) {
        //     console.log("Nothing in the list! Cannot remove from back")
        //     return this
        // }
        // if(this.head.next == null) {
        //     this.head = null
        //     return this
        // }
        // set runner to start at the beginning of list
        var runner = this.head;

        // run all the way through this list until you hit the second to last item and stop
        while(runner.next.next != null) {
            runner = runner.next
        }
        // set runner.next to null, effectively removing final node from the list
        runner.next = null;
        return this
    }

    // given a value, traverse through your list and return true or flase if the value exists in the list
    contains(value) {
        // edge case: what if there's nothing in the list?
        if(!this.head) { //this.head === null
            console.log("There's nothing in this list, so it cannot contain anything!")
            return false
        }
        // start runner at the beginning of the list
        var runner = this.head;
        while(runner != null) {
            // check if the input value is equal to the runner's value
            if(runner.value == value) {
                // if it is, return true
                console.log(`Found it! ${runner.value}`);
                return true
            }
            runner = runner.next;
        }
        // if we made it through out entire list and never hit true, we didn't find it!
        return false
    }

    // ** note for the contains function: if you want to reatin the ability to chain methods from this method
    // change the return statements to be "return this" and simply console.log true or false beforehand

    // find the location of the lowest value in the list, and move that value to the front
    moveMinToFront(){
        // your code here

        // step #1) find the lowest value in the list
        // --> keep track of the location of the lowest node
        // --> also keep track of the location of the node right before it

        // step #2) "remove" node from current location and move it to the front oof your list
    }

    // find the location of the highest value in the list, and move that value to the back
    moveMaxToBack(){
        // your code here

        
        // step #1) find the highest value in the list
        // --> keep track of the location of the highest node
        // --> also keep track of the location of the node right before it

        // step #2) "remove" node from current location and move it to the end oof your list
    }

}

const sll = new SLList();
sll.addToFront(-3)
sll.addToFront(-122)
sll.addToFront(41)
sll.addToBack(48)
sll.addToBack(-5)
sll.printValues()
console.log("==========================================")
sll.moveMinToFront()
sll.printValues()
console.log("==========================================")
sll.moveMaxToBack()
sll.printValues()
