# hide-code

Hides the code of a javascript `class`, `object`. It does not affect
non-function properties and hides the code of constructors and class methods
too.

``` js
const hide = require('hide-code')

class Foo {
  constructor () { this.a = 123 }
  bar () { console.log('abc') }
}

Foo = hide(Foo)

const f = new Foo()
console.log(f.bar.toString()) // '[Foo: bar]'
```

## install

```
$ npm i hide-code
```

## use
#### `hide = require('hide-code')`
`hide` is a function that takes a javascript `class` or `object` and returns
the same thing with its code hidden.

## test

```
$ npm test
```
