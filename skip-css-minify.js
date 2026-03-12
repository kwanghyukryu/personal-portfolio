// skip-css-minify.js
const Module = require('module');
const originalRequire = Module.prototype.require;

// Override require to stub css-minimizer-webpack-plugin
Module.prototype.require = function (path) {
  if (path.includes('css-minimizer-webpack-plugin')) {
    console.log('⚠️  CSS minification disabled (using dummy plugin)');
    return class DummyCSSMinimizerPlugin {
      apply() {
        // Do nothing
      }
    };
  }
  return originalRequire.apply(this, arguments);
};

// Run the standard CRA build
require('react-scripts/scripts/build');
