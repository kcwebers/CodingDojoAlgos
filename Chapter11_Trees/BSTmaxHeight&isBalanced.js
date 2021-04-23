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

    // Given a BST, return the height of the largest branch
    maxHeight() {
        // your code here
    }

    // Given a BST, determine if it is balanced
    isBalanced() {
        // your code here
    }

// ============================
// Students' Solutions
// ============================

    maxHeight(n = this.root) {
        return  n == null ? 0 : 1 + Math.max(this.maxHeight(n.left),this.maxHeight(n.right)); 
    }
    isBalanced(n = this.root) {
        return n == null ? true : this.maxHeight(n.left) == this.maxHeight(n.right);
    }

// ============================

    maxHeight(){
        if(this.root == null){
            return 0;
        }
        var max = this.findMax();
        var min = this.findMin();
        if(min == max){
            return 1;
        }
        var height =1;
        for(var x= min; x<= max; x++){
            var current = this.root;
            var count = 1;
            while(current != null){
                if(x< current.value){
                    count +=1;
                    current = current.left;
                }else if(x> current.value){
                    count += 1;
                    current = current.right;
                }else{
                    if(count>height){
                        height = count;
                    }
                    break;
                }
            }
        }
        return height;
    }

// ============================

    add(value) {
        // your code here
        var newNode = new Node(value);
        newNode.height = 0;
        if(this.root == null){
            this.root = newNode;
            this.root.height = 0
        } else{
            var subroot = this.root;
            while(subroot!=null){
                if(subroot.value>value){
                    if(subroot.left!=null){
                        subroot= subroot.left;
                    }
                    else{
                        subroot.left = newNode
                        if(subroot.right==null){
                            this.root.height++
                        }
                        return;
                    }
                } else if(subroot.value<value){
                    if(subroot.right!=null){
                        subroot = subroot.right;
                    } else{
                        subroot.right = newNode;
                        if(subroot.left==null){
                            this.root.height++
                        }
                        return;
                    }
                }
                else{
                    console.log("You can't insert duplicate values in a BST!");
                    return;
                }
            }
        }
    }
    maxHeight() {
        // your code here
        console.log("Max height is: "+this.root.height);
        return this.root.height;
    }

// ============================



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
bst.maxHeight();
bst.isBalance();




