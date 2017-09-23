export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/bmTest.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng.bmTest',
    globals: {
      '@angular/core': 'ng.core',
      '@angular/common': 'ng.common'
    }
  }