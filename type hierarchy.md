How does TypeScript's type hierarchy work with any, unknown, and never? Why is unknown always preferred over any?

ans: In TypeScript, any, unknown, and never are three special types that behave differently.

- Any: We can assign any type of value to an any variable and perform any operation on it. TypeScript doesn't check its type, so it can cause unexpected errors.

- Unknown: Like any, it can store any type of value. But before using it, we must check its type. This makes our code safer.

- Never: It represents a value that never occurs. For example, a function that always throws an error or never finishes running can have a never return type.

Why is unknown preferred over any?

I prefer unknown because it provides better type safety. It forces us to check the value before using it, whereas any skips type checking completely.
