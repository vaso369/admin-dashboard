const Color = require('./colors')

class Typography {
  constructor(data) {
    this.name = data.name
    this.color = new Color(data)
    this.font = data.style
  }

  get nameArray() {
    return this.name.split(' - ')
  }

  get mediaSize() {
    return this.nameArray[0].toLowerCase()
  }

  get htmlTagName() {
    const size = this.nameArray
    const tag = this.nameArray
    return size[0].toLowerCase() + '-' + tag[1].toLowerCase()
  }

  get className() {
    return this.nameArray[2].toLowerCase()
  }

  get style() {
    const obj = {}
    let counter = 0
    for (const key in this.font) {
      if (counter % 2 === 0 && counter < 5) {
        obj[key] = this.font[key]
      }
      counter++
    }

    let num = 0
    const styleString = `{${Object.keys(obj).reduce(
      (prev, curr) =>
        `${(prev += curr
          .split(/(?=[A-Z])/)
          .join('-')
          .toLowerCase())}:${shouldPutQoutes(obj[curr])};`,
      '',
    )}}`

    function shouldPutQoutes(current) {
      if (num === 0) {
        num++
        return `"${current}"`
      }
      return `${current}px`
    }
    return styleString
  }
}

module.exports = Typography
