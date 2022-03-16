const NextServer = require('next/dist/server/next-server').default;
const path = require('path');
const { expressify } = require('@adobe/openwhisk-action-utils');

function main(params) {
  try {
    const next = new NextServer({
      dir: path.join(__dirname),
      dev: false,
      conf: NEXTJS_CONFIGURATION
    });
    
    const handler = next.getRequestHandler();
    
    return expressify(handler)(params)
  }
  catch (error) {
    return {
      error: {
        statusCode: 500,
        body: {
          error: error.toString()
        }
      }
    };
  }
}

exports.main = main;
