const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // Compressing times out on Runtime ??...
  compress: false,
  // Use the CDN in production
  assetPrefix: isProd ? 'https://53444-runtimenextjs.adobeio-static.net' : '',
  // For next/image
  images: {
    domains: ['<%= AEM_SERVER %>']
  },
  env: {
    NAME: '<%= NAME %>',
    AEM_SERVER: '<%= AEM_SERVER %>',
    AEM_GRAPHQL_ENDPOINT: '<%= AEM_GRAPHQL_ENDPOINT %>',
    MAGENTO_GRAPHQL: '<%= MAGENTO_GRAPHQL %>'
  },
  // Required for serverless
  experimental: {
    outputStandalone: true
  }
};