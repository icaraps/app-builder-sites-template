require('dotenv').config();
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // Compressing times out on Runtime ??...
  compress: false,
  // Use the CDN in production
  assetPrefix: isProd ? `https://${process.env.AIO_runtime_namespace}.adobeio-static.net` : '',
  // For next/image
  images: {
    domains: ['<%= AEM_HOST %>']
  },
  env: {
    NAME: '<%= APP_NAME %>',
    AEM_SERVER: '<%= AEM_HOST %>',
    AEM_GRAPHQL_ENDPOINT: '<%= AEM_GRAPHQL %>',
    MAGENTO_GRAPHQL: '<%= MAGENTO_GRAPHQL %>'
  },
  // Required for serverless
  experimental: {
    outputStandalone: true
  }
};
