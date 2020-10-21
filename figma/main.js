const request = require('request')
const fs = require('fs')
const secret = require('./secret')
const Color = require('./colors')
const Gradient = require('./gradients')
const Typography = require('./typography.js')

const pathsArray = [
  './src/styles/_color_vars_.scss',
  './src/styles/_typography_vars_.scss',
  './src/styles/_gradient_vars_.scss',
]

try {
  pathsArray.forEach((path) => {
    if (fs.existsSync(path)) {
      fs.unlink(path, (err) => {
        if (err) throw err
      })
    }
  })
} catch (err) {
  console.error(err)
}

const options = {
  method: 'GET',
  url: 'https://api.figma.com/v1/files/4tLfR7X1xR2BOk55qlLsCt',

  headers: {
    'X-Figma-Token': secret['X-Figma-Token'],
  },
}
request(options, (error, response, body) => {
  if (error) throw new Error(error)
  const data = JSON.parse(body).document.children[0].children

  const colors =
    data
      .filter((child) => child.name === 'Colors')[0]
      .children.filter((child) => child.type !== 'TEXT') || []

  const desktopFonts =
    data
      .filter((child) => child.name === 'Desktop Fonts')[0]
      .children.filter((child) => child.type === 'TEXT') || []

  const gradients =
    data
      .filter((child) => child.name === 'Gradients')[0]
      .children.filter((child) => child.type !== 'TEXT') || []

  const colorsArray = []
  const typographiesArray = []
  const gradientsArray = []

  if (colors.length !== 0) {
    colors.map((el) => {
      if (el.name !== 'Colors') colorsArray.push(el)
    })
    const colorObjects = colorsArray.map((color) => new Color(color))
    colorObjects.forEach((color) => {
      fs.appendFile('./src/styles/_color_vars_.scss', `${color.cssVariables}\n`, (err) => {
        if (err) throw err
      })
    })
  }
  if (desktopFonts.length !== 0) {
    desktopFonts.map((el) => {
      if (el.name !== 'Typography') typographiesArray.push(el)
    })
    const typographiesObjects = typographiesArray.map((typo) => new Typography(typo))
    typographiesObjects.forEach((typo) => {
      fs.appendFile(
        './src/styles/_typography_vars_.scss',
        `@mixin ${typo.htmlTagName} ${typo.style}\n`,
        (err) => {
          if (err) throw err
        },
      )
    })
  }
  if (gradients.length !== 0) {
    gradients.map((el) => {
      if (el.name !== 'Gradients') gradientsArray.push(el)
    })

    const gradientObjects = gradientsArray.map((gradient) => new Gradient(gradient))
    gradientObjects.forEach((gradient) => {
      const gradientColorArray = gradient.colorObjects
      gradientColorArray.forEach((color) => {
        fs.appendFile('./src/styles/_gradient_vars_.scss', `${color.cssVariables}\n`, (err) => {
          if (err) throw err
        })
      })
    })

    gradientObjects.forEach((gradient) => {
      fs.appendFile('./src/styles/_gradient_vars_.scss', `${gradient.cssVariables}\n`, (err) => {
        if (err) throw err
      })
    })
  }
})
