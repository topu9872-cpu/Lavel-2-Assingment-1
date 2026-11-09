What are the core differences between type aliases and interface in TypeScript? When should you choose one over the other?

ans:  In TypeScript, both type and interface are used to define the structure of data. The main difference is that interface is mainly used for defining objects, while type is more flexible and can define objects, unions, primitives, and tuples.

An interface supports declaration merging, which means we can declare the same interface multiple times, and TypeScript will combine them. It also uses the extends keyword to inherit properties.

On the other hand, type uses & to combine multiple types and supports union types using |.

I usually prefer interface when defining object structures, such as user information or API responses. I use type when working with union types or more complex type definitions.

Both are useful, and choosing one depends on the situation.


