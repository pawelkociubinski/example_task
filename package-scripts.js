const { series, rimraf } = require("nps-utils");

module.exports = {
  scripts: {
    "start": series.nps("build.dll", "devServer"),
    "publish": series.nps("clean", "build.production"),
    "devServer": "NODE_ENV=development webpack-dev-server --config webpack/webpack.config.development.js",
    "build": {
      "dll": "NODE_ENV=development webpack --config webpack/webpack.config.dll.js --color -p --progress --hide-modules --display-optimization-bailout",
      "development": "NODE_ENV=development webpack --config webpack/webpack.config.development.js --color -p --progress --hide-modules --display-optimization-bailout",
      "production": "NODE_ENV=production webpack --config webpack/webpack.config.production.js --color -p --progress --hide-modules --display-optimization-bailout"
    },
    "test": {
      "default": "NODE_ENV=test jest --coverage",
      "watch": "NODE_ENV=test jest --watchAll"
    },
    "lint": "eslint --fix .",
    "vet": "npmvet",
    "flow": "flow",
    "clean": rimraf("dist")
  }
};
