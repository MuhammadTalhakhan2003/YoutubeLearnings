class Hashing {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;

    for (let i = 0; i < size; i++) {
      this.table[i] = [];
    }
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      const [k, v] = bucket[i];
      if (k === key) {
        bucket[i][1] = value;  // update value
        return;
      }
    }

    bucket.push([key, value]);  // insert new
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined; // key not found
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    let removed = false;

    const newBucket = [];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] !== key) {
        newBucket.push(bucket[i]);
      } else {
        removed = true;
      }
    }

    this.table[index] = newBucket;
    return removed;
  }
}

// Usage
const hashTable = new Hashing(50);
hashTable.set("name", "Talha");
hashTable.set("a", "apple");

console.log(hashTable.get("name")); // Talha
console.log(hashTable.get("a"));    // apple
console.log(hashTable.get("b"));