const test = require('ava')

const hide = require('./')

test('class constructor', t => {
  class Foo {
    constructor (a) { this.a = a }
  }
  Foo = hide(Foo)

  t.is(Foo.prototype.constructor.toString(), '[Foo: constructor]')
})

test('class instance methods', t => {
  class Foo {
    constructor (a) { this.a = a }
    method1 () {
      console.log(this.a)
      return 'method1'
    }
  }

  Foo = hide(Foo)

  const f = new Foo(5)
  t.is(f.method1.toString(), '[Foo: method1]')
})

test('class methods', t => {
  class Foo {
    constructor (a) { this.a = a }
  }

  Foo.method2 = () => {
    console.log('method2')
  }

  Foo = hide(Foo)

  t.is(Foo.method2.toString(), '[Foo: method2]')
})

test('object\'s functions', t => {
  let o = {
    a: 123,
    foo: () => {
      console.log('abc')
    },
    bar () {
      console.log('bca')
    }
  }

  o = hide(o)

  t.is(o.a.toString(), '123')
  t.is(o.foo.toString(), '[object: foo]')
  t.is(o.bar.toString(), '[object: bar]')
})
