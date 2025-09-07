// head - next -3-4             4-3-2-1          o(n)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head){
    let prev = null;
    let current = head;
    while(current){
         let next = current.next;
         current.next = prev;
         prev = current;
         current = next;


    }
    return prev
}

let head = new Node(9);
head.next = new Node(2);
head.next.next = new Node(77);
head.next.next.next = new Node(4);

let reverse = reverseLinkedList(head);
while (reverse) {
    console.log(reverse.value);
    reverse = reverse.next
}

