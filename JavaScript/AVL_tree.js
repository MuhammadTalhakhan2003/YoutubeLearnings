class Node{
    constructor(key){
         this.key =key;
         this.left=null;
            this.right=null;
            this.height=1;


    }
}

class AVLTree{
 constructor(){
    this.root=null;
 }
height(node){
if(node===null){
    return 0;
}
return node.height;
}

getBalance(node){
    if(node=== null) return 0;
    return this.height(node.left)- this.height(node.right);
}
rightRotate(y){
    let x = y.left;
    let T2 = x.right;
    x.right = y;
    y.left = T2;
    
    y.height = 1 +Math.max (this.height (y.left), this.height (y.right));
    x.height = 1 +Math.max (this.height (x.left), this.height (x.right));

    return x;

} 

 leftRotate(x){
    let y = x.right;
    let T = y.left;
    
    y.left = x;
    x.right = T;


    x.height = 1 +Math.max (this.height (x.left), this.height (x.right));
    y.height = 1 +Math.max (this.height (y.left), this.height (y.right));
   
    return y;
 }
 insert(value){
    this.root = this._insertNode(this.root, value);
 }
_insertNode(node, key){
    if(node === null){
        return new Node(key);
    }
    if(key < node.key){
        node.left = this._insertNode (node.left, key);
    }
    else if(key > node.key){
        node.right = this._insertNode (node.right, key);
    }
    else{
        return node;
    }
    node.height = 1 + Math.max (this.height (node.left), this.height (node.right));

    let balance = this.getBalance(node);
    // Left Left Case
    if(balance > 1 && key < node.left.key){
        return this.rightRotate(node);
    }
  // Right right Case
if(balance < -1 && key > node.right.key){
        return this.leftRotate(node);
    }
    // Left Right Case
    if(balance > 1 && key > node.left.key){
        node.left = this.leftRotate(node.left);
       return this.rightRotate (node);
    }
 
    // Right Left Case
    if(balance < -1 && key < node.right.key){
        node.right = this.rightRotate(node.right);
    return this.leftRotate (node);
    }
    return node;
}
//Print Number in sorted Order
inorder(){
    let result = [];
    this._inorderHelper(this.root, result);
    return result;
}
_inorderHelper(node, result){
        if(node === null){
            return;
        }
        this._inorderHelper(node.left, result);
        result.push(node.key);
        this._inorderHelper(node.right, result);


}
}

//Try It
let avl = new AVLTree();
avl.insert(30);
avl.insert(20);
avl.insert(10);

avl.insert(25);
avl.insert(40);
avl.insert(50);
avl.insert(2);
avl.insert(5);
avl.insert(4);
avl.insert(9);

console.log("Inorder Traversal of AVL Tree: ", avl.inorder());

