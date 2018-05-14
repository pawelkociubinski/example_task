const { join } = require('path');

const packageJson = join(process.cwd(), 'package.json');
const { dependencies } = require(packageJson);

const app = join(process.cwd(), 'src', 'index.js');
const dist = join(process.cwd(), 'dist');
const manifest = join(dist, 'libraries-manifest.json');
const dll = join(dist, 'libraries.js');

const libraries = Object.keys(dependencies)
  .filter(dependency => dependency !== 'sanitize.css')
  .map(dependency => dependency);

module.exports = {
  app,
  dist,
  dll,
  libraries,
  manifest,
};
