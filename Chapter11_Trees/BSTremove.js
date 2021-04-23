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

    contains(value) {
        var runner = this.root;
        while(runner != null){
            if(runner.value < value){
                runner = runner.right;
            }
            else if (runner.value > value){
                runner = runner.left;
            }
            else{
                return true;
            }
        }
        return false;
    }

    // Given a BST and a node's value, remove the specified node from the BST without disrupting the structure
//    remove(n = this.root, value) {
//        if(n == null) {
//            return;
//        } else if (value < n.value) {
//            n.left = this.remove(n.left, value);
//        } else if (value > n.value) {
//            n.right = this.remove(n.right, value);
//        } else {
//            if(n.left == null) {
//                console.log("Deletion when there is no left child");
//                return n.right;
//            } else if(n.right == null) {
//                console.log("Deletion when there is no right child");
//                return n.left;
//            } else {
//                console.log("Deletion when there are 2 children");
//                n.value = this.findMin(n.right).value;
//                n.right = this.remove(n.right, temp.value);
//            }
//            return n;
//        }
//    }

    // ============================
    // Students' Solutions
    // ============================
    
    remove(value) {
        //your code here
        if(this.contains(value)){
            // delete the node
            this.root = this.removeNode(this.root, value);
            console.log("successfully deleted!");
        }
        else{
            console.log("No such value found in the tree!")
        }
    }

    removeNode(node, value){
        if(node==null){
            return node;
        }
        if(node.value>value){
            node.left = this.removeNode(node.left, value)
        }
        else if(node.value <value){
            node.right = this.removeNode(node.right, value)
        }
        // found it!
        else{
            // if either child is null
            if(node.right==null){
                return node.left;
            }
            else if(node.left == null){
                return node.right;
            }
            // if both child are not null
            // find replacement for the to-be-deleted tree: i.e. smallest after its next largest and duplicate the value into the node
            node.value = this.findMin(node.right).value;
            // now delete the original node (whose value replaced the found node)
            node.right(this.removeNode(node.right, node.value));
        }
        return node;
    }

    findMin(){
        var runner = this.root;
        while(runner.left != null){
            runner = runner.left;
        }
        return runner.value;
    }
    // Extra Mini Challenge: Since these 2 algos make pre-order printing, can you do post-order?
    printBSTNodes(node = this.root) {
        if(node==null){
            return;
        }
        this.printBSTNodes(node.right);
        console.log(node.value);
        this.printBSTNodes(node.left);
    }
}

var bst = new BST();
bst.add(8);
bst.add(15);
bst.add(3);
bst.add(2);
bst.add(22);
bst.add(10);
bst.add(5);
bst.remove(15);




