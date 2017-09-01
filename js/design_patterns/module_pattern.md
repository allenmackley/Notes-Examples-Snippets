### Module Pattern

The Module Pattern encapulates private state using closures.

Although there are some good things about this pattern, there are a lot of tradeoffs, such as the inability to create automated tests.

```
var cart = (function() {
    var items = [];

    function sumArray(items) {
        return items.reduce((sum, item) => {
            return sum + parseFloat(item.price);
        }, 0);
    }
    function parseCurrency(amount) {
        return `$${amount.toFixed(2)}`
    }

    return {
        addItem(value) {
            items.push(value);
        },
        size() {
            return items.length;
        },
        total: function total() {
            return parseCurrency( sumArray(items) );
        }
    };
})();

cart.addItem({
    item: "milk",
    price: "3.98"
});
cart.addItem({
    item: "wheaties",
    price: "3.21"
}); 

console.log('size', cart.size());
console.log('total', cart.total());
```

In this example, we call an anonymous function (using the ES6 arrow function here as a shorthand). The anonymous function creates a closure so that we can define private functions away from the global scope. 

If everything were public, we might define cart like this:
```
var cart = {
    items: [],
    total: function() {
        var total = this.items.reduce((sum, item) => {
            return sum + parseFloat(item.price);
        }, 0);
        return `$${total.toFixed(2)}`;
    },
    addItem(value) {
        this.items.push(value);
    },
    size() {
        return this.items.length;
    }
};
```

In this case, `cart.total()` is a public method, which means if we examined `cart` in the console, we would see it, and it could also be overwritten on the global scope.

### Why use private methods?
When writing a class, we need to think about which parts of the class are going to be accessible by other parts of our application, and which parts are internal methods that simply structure functionality?

Private methods encapsulate complexity that doesn't need to be exposed. These methods won't be reimplimented and accessed by future programmers and are meant to be used for internal processes.

Using private methods is a good design practice and helps us follow the Single Responsibility Principal.

### Importing Global Mixins
The Module Pattern is used often for importing global mixins, such as jQuery or Underscore. 

This is commonly seen, for example.
```
var myModule = (function($) {
    //... jQuery code
})(jQuery);

Why is this a good idea?
Well, what if the `$` symbol was used by another library on the global scope also? To avoid a naming complict, we can pass jQuery into this scoped area and just work with it there.