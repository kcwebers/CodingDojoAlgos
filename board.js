class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null; // to the left should only be less than
        this.right = null; // to the right should only be greater than
    }

    add(value) {
        if(value < this.value) {
            if(this.left) {
                this.left.add(value);
            } else {
                this.left = new BSTNode(value);
            }
        }

        if(value > this.value) {
            if(this.right) {
                this.right.add(value);
            } else {
                this.right = new BSTNode(value);
            }
        }
    }

    contains(value) {
        if(value < this.value) {
            if(this.left) {
                return this.left.contains(value);
            } else {
                return null;
            }
        }
        if(value > this.value) {
            if(this.right) {
                return this.right.contains(value);
            } else {
                return null;
            }
        }
        return this;
    }

    size() {
        return  (this.left ? this.left.size() : 0) + 
        (this.right ? this.right.size() : 0) + 1;
    }

}

class BST {
    constructor() {
        this.root = null;
    }
    // given a BST add a node to it in the appropriate spot!
    // remember a BST contain values that are larger to the right of a Node, and smaller to the left
    // a BST also does not contain duplicates!
    add(value) {
        !this.root ? this.root = new BSTNode(value) : this.root.add(value)
    }

    // find and return the node of a given value
    contains(value) {
        return !this.root ? null : this.root.contains(value);
    }

    // return the size (number of nodes) of a BST
    size() {
        return !this.root ? 0 : this.root.size();
    }
}

var bst = new BST();
bst.add(10);
bst.add(15);
bst.add(5);
bst.add(-20);
bst.add(25);
console.log("====================");
console.log(bst.contains(15));
console.log(bst.contains(32));
console.log(bst.size());