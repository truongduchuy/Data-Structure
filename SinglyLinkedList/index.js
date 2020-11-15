class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        let current = this.head;        
        if(!current)
            return undefined;
        var newTail = current;

        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    unshift(val) {
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0|| index >= this.length){
            return null;
        }
        var current = this.head;
        var counter = 0;
        while(counter !== index) {
           current = current.next;
           counter++;
        }
        
        return current;
    }

    set(index, value) {
        let foundNode = this.get(index);

        if(foundNode) {
            foundNode.val = value;
            return true;
        }

        return false;
    }
}

const list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)