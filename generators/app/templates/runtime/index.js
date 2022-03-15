const NextServer = require('next/dist/server/next-server').default;
const path = require('path');
const { expressify } = require('@adobe/openwhisk-action-utils');

function main(params) {
  try {
    const next = new NextServer({
      dir: path.join(__dirname),
      dev: false,
      // TODO should be pulled in dynamically
      conf: {"env":{"AEM_SERVER":"publish-p7719-e13203.adobeaemcloud.com","AEM_GRAPHQL_ENDPOINT":"/content/_cq_graphql/global/endpoint.json"},"webpack":null,"webpackDevMiddleware":null,"eslint":{"ignoreDuringBuilds":false},"typescript":{"ignoreBuildErrors":false,"tsconfigPath":"tsconfig.json"},"distDir":"./.next","cleanDistDir":true,"assetPrefix":"https://53444-runtimenextjs.adobeio-static.net","configOrigin":"next.config.js","useFileSystemPublicRoutes":true,"generateEtags":true,"pageExtensions":["tsx","ts","jsx","js"],"target":"server","poweredByHeader":true,"compress":false,"analyticsId":"","images":{"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["publish-p7719-e13203.adobeaemcloud.com","53444-runtimenextjs.adobeio-static.net"],"disableStaticImages":false,"minimumCacheTTL":60,"formats":["image/webp"],"dangerouslyAllowSVG":false,"contentSecurityPolicy":"script-src 'none'; frame-src 'none'; sandbox;"},"devIndicators":{"buildActivity":true,"buildActivityPosition":"bottom-right"},"onDemandEntries":{"maxInactiveAge":15000,"pagesBufferLength":2},"amp":{"canonicalBase":""},"basePath":"","sassOptions":{},"trailingSlash":false,"i18n":null,"productionBrowserSourceMaps":false,"optimizeFonts":true,"excludeDefaultMomentLocales":true,"serverRuntimeConfig":{},"publicRuntimeConfig":{},"reactStrictMode":false,"httpAgentOptions":{"keepAlive":true},"outputFileTracing":true,"staticPageGenerationTimeout":60,"swcMinify":false,"experimental":{"cpus":7,"sharedPool":true,"plugins":false,"profiling":false,"isrFlushToDisk":true,"workerThreads":false,"pageEnv":false,"optimizeCss":false,"scrollRestoration":false,"externalDir":false,"reactRoot":false,"disableOptimizedLoading":false,"gzipSize":true,"swcFileReading":true,"craCompat":false,"esmExternals":true,"isrMemoryCacheSize":52428800,"serverComponents":false,"fullySpecified":false,"outputFileTracingRoot":"","outputStandalone":true,"trustHostHeader":false},"configFileName":"next.config.js"},
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