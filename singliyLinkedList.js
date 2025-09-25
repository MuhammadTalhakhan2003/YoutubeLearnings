class Node{
constructor(data){
   this.data=data;
   this.forward=null;
}
}
class SingliyLinkedList{
constructor(){
    this.head=null;    
}
addAtBeginning(data){
  const newNode = new Node(data);
  newNode.forward=this.head;
  this.head=newNode;
}
addAtEnd(data){
    const newNode = new Node(data);
    if(!this.head===null){
        this.head=newNode;
        return;
    }
    let current=this.head;
    while(current.forward !==null){
        current = current.forward;
    }
    current.forward=newNode;
}
addAfter(targetData,newData){
    let current=this.head;
    while(current !==null && current.data !==targetData){
        current=current.forward;
    }
    if(current === null){
        console.log("Steps not found");
        return;
    }
    const newNode=new Node(newData);
    newNode.forward=current.forward;
    current.forward=newNode;


}
delete(data){
    if(this.head === null){
        console.log("List(Bunch of Steps) is empty");
        return;
    }
    if(this.head.data === data){
        this.head=this.head.forward;
        return;
    }
    let current = this.head;
    while(current.forward !==null && current.forward.data !==data){
        current=current.forward;
    }
    if(current.forward === null){
        console.log("Steps not found");
        return;
    }
    current.forward=current.forward.forward;
}
display(){
 let current=this.head;
 let result ="";
 while(current !==null){
    result +=current.data + " -> ";
    current=current.forward;
 }
 result +="null";
 console.log(result);   
}
}

const treasureMap = new SingliyLinkedList();
treasureMap.addAtEnd("Start at the old oak tree");
treasureMap.addAtEnd("Walk 10 steps north");
treasureMap.addAtEnd("Turn east and walk 5 steps");
treasureMap.addAtEnd("Dig under the large rock");
treasureMap.display();
treasureMap.addAtBeginning("Find the old oak tree in the park");
treasureMap.display();
treasureMap.addAfter("Walk 10 steps north","Look for a red flag");
treasureMap.display();
treasureMap.delete("Turn east and walk 5 steps");
treasureMap.display();
treasureMap.delete("Swim across the river");
treasureMap.display();





