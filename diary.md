# Learning Diary Code 2

## Quick Tips

- Use "!" for easy and fast HTML structure.
- Enable sourcemaps in the TypeScript config for easier debugging.
- Use **Namespaces** to organize code across multiple files: `namespace Example {}`
- Adding `export` to a namespace lets files with the same namespace use it, even if they are in separate TypeScript files.

---

## Classes

In TypeScript, a **class** is a blueprint for creating objects with properties and methods. It defines the structure and behavior that objects of that class will have. Classes support features like:
- **Constructors** (for initializing values),
- **Inheritance** (for sharing properties and methods with other classes), and
- **Modifiers** (to control access to properties and methods).

### Constructor

In TypeScript, a **constructor** is a special method inside a class that runs automatically when a new instance of that class is created. Defined using the `constructor` keyword, it initializes the object by setting up properties or running any necessary setup code.

> **Tip:** Keep each class in a separate file for clarity and to avoid confusion.

Also, don’t forget to link all new files in your HTML.

### Reference

For examples of how classes work, refer back to your Code 2 repository under `Task02/farm`. There, you’ll find examples of classes as well as the necessary HTML links.

---

## Questions to Consider Before Creating a Class

1. **What does it have?** (Attributes/Properties)
2. **What can it do?** (Methods)
3. **What does it know?** (Information for the outside)
4. **Who holds it?**
5. **What is it?**
