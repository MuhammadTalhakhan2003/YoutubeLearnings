class Node{

constructor(data){

this.data=data;
this.forward =null;
this.backward=null;

}
}

class DoublyLinkedList{

constructor(){
    this.head=null;
    this.tail=null;
}
insertAtEnd(data){

const newNode=new Node(data);
if(!this.head){
    this.head=this.tail=newNode;
}
else{
    this.tail.forward= newNode;
    newNode.backward=this.tail;
    this.tail=newNode;
}
}
//TimeComplexity:o(1)

insertAtBeginning(data){
    const newNode=new Node(data);
    if(!this.head){
    this.head=this.tail=newNode;
}
else{
    newNode.forward=this.head;
    this.head.backward=newNode;
    this.head=newNode;
}
}
// time complexity:o(1)
delete(data){
    let current =this.head;
    while(current){
        if(current.data===data){
             if(current.backward) current.backward.forward=current.forward;
                else this.head=current.forward;

             if(current.forward) current.forward.backward=current.backward;
                 else this.tail=current.backward;       
                return;

        }
   current = current.forward;
    }
}
 //time complexity:o(n)

printForward(){
let current=this.head;
let result="";
while(current){

result += current.data + "->";

current=current.forward;
}
console.log(result + "null")
}

//time complexity:o(n)
printBackward(){
let current=this.tail;
let result="";
while(current){

result += current.data + "<-";

current=current.backward;
}
console.log(result + "null")
}
//time complexity:o(n)
}


const dll=new DoublyLinkedList();
dll.insertAtEnd(10);
dll.insertAtEnd(20);
dll.insertAtBeginning(5);
dll.insertAtEnd(30);

dll.printForward();
dll.printBackward();

dll.delete(20);
dll.printForward();
dll.printBackward();

dll.delete(5);
dll.printForward();
dll.printBackward();