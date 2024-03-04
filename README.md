# is-number

> Returns true if the value is a number. comprehensive tests.

# Example

```js
isNumber(5e3); //=> true
isNumber(0xff); //=> true
isNumber(-1); //=> true
isNumber(0); //=> true
isNumber(1.337); //=> true
isNumber(-1.337); //=> true
isNumber(1e-8); //=> true
isNumber(1e-80); //=> true
isNumber(0.1); //=> true
isNumber(-0.1); //=> true
```

```js
isNumber('1.1.1') //=> false
isNumber('1a') //=> false
isNumber('a') //=> false
isNumber('') //=> false
isNumber(null) //=> false
isNumber(undefined) //=> false
isNumber([]) //=> false
isNumber({}) //=> false
isNumber(NaN) //=> false
isNumber(Infinity) //=> false
isNumber(-Infinity) //=> false
```
