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

    // Given a value, check to see if the value is in the BST
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

    // Given a BST, determine the size (how many nodes there are)
    size(node = this.head){
        if(node == null) return 0;
        else return(this.size(node.left) + 1 + this.size(node.right))
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
bst.add(-12);
bst.add(22);
bst.add(10);
bst.add(5);
bst.add(10);
bst.contains(10); // true
bst.contains(17); // false
bst.size(); // 7



