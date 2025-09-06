// BOOK  2 SPACES   A book           B book         Space 2 - 2   0   C Book         A book --- Quiz      B book nikal diya         1 Space Available  Book C bag place in book b place

// Bag  ---  cache


class LRUCache{
 constructor(capacity){
     this.capacity = capacity;
     this.cache = new Map();

 }
 get(key){
    if(!this.cache.has(key)){
          return -1;

    }
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key , value)
    return value;
 }
 put(key,value){
    if(this.cache.has(key)){

        this.cache.delete(key)


    }
    else if (this.cache.size >= this.capacity){
        const lruKey = this.cache.keys().next().value;
        this.cache.delete(lruKey)
    }
    this.cache.set(key,value)
 }
}



const bag = new LRUCache(2);
bag.put(1,"BOOK A");
bag.put(2,"BOOK B");
console.log(bag.get(1))  //Book A
bag.put(3,"BOOK C");

console.log(bag.get(2))
console.log(bag.get(3))
console.log(bag.get(1))



//big o  o(n)   o 1