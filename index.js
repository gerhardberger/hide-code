const debug = require('debug')('hide-code:index')

module.exports = (klass) => {
  const name = klass.name && (klass.name !== '') ? klass.name : (typeof klass)

  const mapper = o => {
    Object.getOwnPropertyNames(o).forEach(m => {
      if (typeof o[m] === 'function') {
        const f = () => `[${name}: ${m}]`

        o[m].toString = f
        if (o[m].toSource) o[m].toSource = f
      }
    })
  }

  debug('Hiding class methods or object\'s methods')
  mapper(klass)

  if (klass.prototype) {
    debug('Hiding instance methods')
    mapper(klass.prototype)
  }

  return klass
}
