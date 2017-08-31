### Falsy values
`undefined`
`null`
`0`
`false`
`NaN`

###Truthy values
`"0"`
`"123"`
`123`
`true`

`x = 1 || 2; //x is 1`

`x = 0 || 2; //x is 2`

### Double and Triple Equals
Triple equals checks if both the value and the type are the same. Double equals checks if the value is the same, irregardless of the type.
```
var x = 0;
x === "0" //false
x == "0" //true

```

### Floating Point
```
var x = 0.1 + 0.2;
x === 0.3 //false
console.log(x);
//0.1 + 0.2 = 0.30000000000000004

x = x.toFixed(1)
//x === "0.3" //true
```