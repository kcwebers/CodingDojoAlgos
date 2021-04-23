class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }
    add(value) {
        var newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
        } else {
            var runner = this.root;
            while(runner != null) {
                if(runner.value > value) {
                    if(runner.left === null) {
                        runner.left = newNode;
                        return;
                    } else {
                        runner = runner.left;
                    }
                } else if(runner.value < value) {
                    if(runner.right === null) {
                        runner.right = newNode;
                        return;
                    } else {
                        runner = runner.right;
                    }
                } else {
                    console.log("Whoopsie! This Value already exists in the BST!");
                    return;
                }
            }
        }
    }
    
    findNodeParent(val) {
        if(this.root === null) {
            return false; // edge case: if tree does not exist 
        }
        var runner = this.root;
        while(runner.right.value != val || runner.left.value != val) { // looking for if the runner has children AND those children are the value we are searching for 
            if(runner.value > val) {
                runner = runner.left;
            } else {
                runner = runner.right;
            }
        } 
        if(runner === this.root) { // if the runner never moved from the root, it means that there is no parent node 
            return null;
        } else {
            return runner; 
        }
    }

    locate(val) {
        if(this.root === null) { // edge case: if tree does not exist 
            return false;
        }
        var runner = this.root;
        while(runner.value != val) {
            if(runner.value > val) {
                runner = runner.left;
            } else {
                runner = runner.right;
            }
        } 
        return runner;
    }

    rmeove(val) {
        if(this.root === null) { // edge case: if tree does not exist 
            return false;
        }

        //find the node in question; based on the helper functions we created
        var nodeToDelete = this.locate(val);
        //find node's parent; based on the helper functions we created
        var nodeParent = this.findNodeParent(val);

        // CASE #1: if the nodeToDelete DOES NOT HAVE A RIGHT CHILD
        if(nodeToDelete.right === null) {
            if(nodeParent === null) { 
                // edge case: nodeToDelete DOES NOT HAVE A PARENT, therefore nodeToDelete = this.root. 
                // Already established there is no node on the right, so set this.root to nodeToDelete's left child
                this.root = nodeToDelete.left;
            } else {
                //if nodeToDelete's value is less than the nodeParent's, point the nodeParent's left pointer to the nodeToDelete's left child
                if(nodeToDelete.value < nodeParent.value) {
                    nodeParent.left = nodeToDelete.left;
                //if nodeToDelete's value is greater than the nodeParent's, point the nodeParent's right pointer to the nodeToDelete's left child
                } else if(nodeToDelete.value > nodeParent.value) {
                    nodeParent.right = nodeToDelete.left;
                }
            }
        // CASE #2: if the nodeToDelete HAS A RIGHT CHILD, and that right child DOES NOT HAVE A LEFT CHILD 
        } else if (nodeToDelete.right.left === null) {
            nodeToDelete.right.left = nodeToDelete.left;
            if(nodeParent === null) {
                // edge case: nodeToDelete DOES NOT HAVE A PARENT, therefore nodeToDelete = this.root. 
                // Already established there is a node on the right, so set this.root to nodeToDelete's right child
                this.root = nodeToDelete.right;
            } else {
                //if nodeToDelete's value is less than nodeParent's, point the nodeParent's left pointer to the nodeToDelete's right child
                if(nodeToDelete.value < nodeParent.value) {
                    nodeParent.left = nodeToDelete.right;
                //if nodeToDelete's value is greater than nodeParent's, point the nodeParent's right pointer to the nodeToDelete's right child
                } else if(nodeToDelete.value > nodeParent.value) {
                    nodeParent.right = nodeToDelete.right;
                }
            }
        // CASE #3: if the nodeToDelete HAS A RIGHT CHILD, and that right child HAS A LEFT CHILD
        } else {
            // find the right's left-most child
            var leftmost = nodeToDelete.right.left;
            var leftmostParent = nodeToDelete.right;

            // loop allows us to continue digging down into the tree until we hit the bottom
            while(leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
            }

            // nodeParent's left subtree becomes the leftmost's right subtree
            leftmostParent.left = leftmost.right;
            // assign leftmost's left and right pointers to the nodeToDelete's left and right children
            leftmost.left = nodeToDelete.left;
            leftmost.right = nodeToDelete.right;
            // this will allow us to later move the leftmost node into the place of nodeToDelete, 
            // which we will remove by having the nodeParent then point to leftmost as appropriate (see below)

            if(nodeParent === null) {
                this.root = leftmost;
            } else {
                // direct the nodeParent's appropriate pointer to the leftmost node, which should now be arranged in place of the nodeToDelete's 
                if(nodeToDelete.value < nodeParent.value) {
                    nodeParent.left = leftmost;
                } else if(nodeToDelete.value > nodeParent.value) {
                    nodeParent.right = leftmost;
                }
            }
        } 
    }

}