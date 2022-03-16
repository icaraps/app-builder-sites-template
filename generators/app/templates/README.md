# <%= APP_NAME %>

### Install dependencies

`npm install`

### Running locally

1. `npm run dev`
2. Go to `localhost:3000`

### Running on Runtime

1. `npm run build`
2. `npm run rt:build`
3. `npm run rt:deploy`

### Configure AEM to use your SPA

1. Set remote page url property on your AEM root page.
    `aio aem:spa-set-root -h <%= AEM_HOST %> /content/wknd/us/en`
