const rtLib = require('@adobe/aio-lib-runtime')

rtLib.utils.zip(
  'dist/application/actions/pages-temp',
  'dist/application/actions/pages.zip'
)
