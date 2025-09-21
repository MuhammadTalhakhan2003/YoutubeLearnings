#include <iostream>
#include <string>
#include <vector>
using namespace std;

template <typename T>
class Stack
{
private:
    vector<T> elements; // dynamic array
public:
    void push(const T &item)
    {
        elements.push_back(item);
    }

    void pop()
    {
        if (!elements.empty())
            elements.pop_back();
        else
            cout << "Stack is empty, cannot pop.\n";
    }

    T top() const
    {
        if (!elements.empty())
            return elements.back();
        throw out_of_range("Stack is empty!");
    }

    int size() const
    {
        return elements.size();
    }

    bool empty() const
    {
        return elements.empty();
    }
};

// Custom class
class Person
{
public:
    string name;
    int age;
    Person(string n, int a) : name(n), age(a) {}
};

int main()
{
    // Stack of integers
    Stack<int> intStack;
    intStack.push(10);
    intStack.push(20);
    cout << "Top of intStack: " << intStack.top() << endl;
    intStack.pop();
    cout << "Size of intStack: " << intStack.size() << endl;

    // Stack of strings
    Stack<string> strStack;
    strStack.push("Hello");
    strStack.push("World");
    cout << "Top of strStack: " << strStack.top() << endl;
    strStack.pop();
    cout << "Size of strStack: " << strStack.size() << endl;

    // Stack of custom objects
    Stack<Person> personStack;
    personStack.push(Person("Alice", 30));
    personStack.push(Person("Bob", 25));
    Person p = personStack.top();
    cout << "Top of personStack: " << p.name << ", " << p.age << endl;
    personStack.pop();
    cout << "Size of personStack: " << personStack.size() << endl;

    return 0;
}