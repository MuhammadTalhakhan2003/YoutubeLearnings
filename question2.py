class Stack:
    def __init__(self):
        self.elements = []

    def push(self, item):
        self.elements.append(item)

    def pop(self):
        if self.elements:
            return self.elements.pop()
        else:
            print("Stack is empty, cannot pop.")
            return None

    def top(self):
        if self.elements:
            return self.elements[-1]
        raise IndexError("Stack is empty!")

    def size(self):
        return len(self.elements)

    def empty(self):
        return len(self.elements) == 0


# Custom class
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __str__(self):
        return f"Person(name={self.name}, age={self.age})"



if __name__ == "__main__":
    # Stack of integers
    int_stack = Stack()
    int_stack.push(10)
    int_stack.push(20)
    print("Top of int_stack:", int_stack.top())
    int_stack.pop()
    print("Size of int_stack:", int_stack.size())

  
    str_stack = Stack()
    str_stack.push("Hello")
    str_stack.push("World")
    print("\nTop of str_stack:", str_stack.top())
    str_stack.pop()
    print("Size of str_stack:", str_stack.size())


    person_stack = Stack()
    person_stack.push(Person("Alice", 30))
    person_stack.push(Person("Bob", 25))
    print("\nTop of person_stack:", person_stack.top())
    person_stack.pop()
    print("Size of person_stack:", person_stack.size())