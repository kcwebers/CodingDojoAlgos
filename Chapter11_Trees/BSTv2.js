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

    findLongestBranch() {
        if(!this.left && !this.right) {
            return 0;
        }

        let left = this.left ? this.left.findLongestBranch() + 1 : 0;
        let right = this.right ? this.right.findLongestBranch() + 1 : 0;

        return Math.max(left, right);
    }

    verifyBalanced() {
        if(!this.left && !this.right) {
            return true;
        }

        let left = this.left ? this.left.findLongestBranch() + 1 : 0;
        let right = this.right ? this.right.findLongestBranch() + 1 : 0;

        return Math.abs(left - right) <= 1;
    }

    invertNodes() {
        if (this.left) {
            this.left.invertNodes();
        } 
        if (this.right) {
            this.right.invertNodes();
        } 

        // easier / cleaner version of a swap with variables
        [this.left, this.right] = [this.right, this.left]
    }

    findNodeandParent(value, parent = this.root) {
        if(value < this.value) {
            if(this.left) {
                return this.left.findNodeandParent(value, this);
            } else {
                return null;
            }
        }
        if(value > this.value) {
            if(this.right) {
                return this.right.findNodeandParent(value, this);
            } else {
                return null;
            }
        }
        return { 'parent' : parent, 'node' : this };
    }


    invertNodes() {
        if (this.left) {
            this.left.invertNodes();
        } 
        if (this.right) {
            this.right.invertNodes();
        } 

        // easier / cleaner version of a swap with variables
        [this.left, this.right] = [this.right, this.left]

        // var temp = this.left;
        // this.left = this.right;
        // this.right = temp;
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

    countNumberOfLeaves(){
        if(!this.left && !this.right) {
            return 1;
        }
        return  (this.left ? this.left.countNumberOfLeaves() : 0) + 
                (this.right ? this.right.countNumberOfLeaves() : 0);
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

    // returns the total height of the tree; this is the longest sequence of nodes from root to leaf node
    height() {
        return !this.root ? 0 : this.root.findLongestBranch();
    }
    
    // returns true/false based on if the BST is balanced, meaning the nodes are balanced on each side
    isBalanced() {
        return !this.root ? true : this.root.verifyBalanced();
    }

    removeNode(node, value) {
        return node ? node.removeNode(value) : node;
    }

    printInOrder() {
        if ( this.root ) {
            this.root.printInOrder();
        }
    }

    // invert the nodes of a given tree (so left side becomes greater than and right side less than; can assume tree is balanced)
    invertNodes() {
        return this.root ? this.root.invertNodes() : null;
    }

    // find the number of Leaf Nodes (ends of branches)
    countNumberOfLeaves() {
        return !this.root ? 0 : this.root.countNumberOfLeaves();
    }
}

var bst = new BST();
bst.add(10);
bst.add(15);
bst.add(5);
bst.add(20);
bst.add(25);
bst.add(8);
bst.add(3);
console.log("====================");
// console.log(bst.contains(15));
console.log(bst.isBalanced());
console.log(bst.height());