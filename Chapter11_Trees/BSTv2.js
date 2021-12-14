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

    // Given a BST, return the value of the min node in the tree
    findMin(){
        return this.left ? this.left.findMin() : this;
    }
    
    // Given a BST, return the value of the max node in the tree
    findMax(){
        return this.right ? this.right.findMin() : this;
    }

    printInOrder() {
        if(this.left) {
            this.left.printInOrder();
        }
        console.log(this.value);
        if(this.right) {
            this.right.printInOrder();
        }
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

    // Given a BST, return the value of the min node in the tree
    findMin(){
        return this.root ? this.root.findMin() : null;
    }
    
    // Given a BST, return the value of the max node in the tree
    findMax(){
        return this.root ? this.root.findMax() : null;
    }

    // print values: [EXTRA Challenge]
    printInOrder() {
        if ( this.root ) {
            this.root.printInOrder();
        }
    }
}