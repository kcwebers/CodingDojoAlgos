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

    // given a BST add a node to it in the appropriate spot!
    // remember a BST contain values that are larger to the right of a Node, and smaller to the left
    // a BST also does not contain duplicates!
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

    // Given a BST, return the value of the min node in the tree
    findMin(){
        var runner = this.root;
        while(runner.left != null){
            runner = runner.left;
            // keep moving if theres data
        }
        return runner.value;
    }
    
    // Given a BST, return the value of the max node in the tree
    findMax(){
        // same thing only that now it moves in the opposite direction
        var runner = this.root;
        while(runner.right != null) {
            runner = runner.right;
        }
        return runner.value;
    }

    // print values:
    printValues(){
        this.printBSTNodes(this.root);
    }

    printBSTNodes(node){
        if(node==null){
            return;
        }
        this.printBSTNodes(node.left);
        console.log(node.value);
        this.printBSTNodes(node.right);
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
console.log(bst.findMax());
console.log(bst.findMin());



