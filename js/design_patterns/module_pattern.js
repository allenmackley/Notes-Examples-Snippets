var cart = (function(){
    var items = [];
    console.log(this);
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

console.log('size', cart);
// console.log('total', cart.total());

