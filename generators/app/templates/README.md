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
    ```bash
    # Store your IMS token in the IMS_TOKEN environment variable
    export IMS_TOKEN=<your-ims-token>

    aio aem:spa-set-root -h <%= AEM_HOST %> -s 1.5 /content/wknd/us/en
    ```

2. Set Cloudmanager variable to configure CORS for your AEM project.
    ```bash
    # Select the org of your AEMaaCS instance
    aio cloudmanager:org:select

    # Provide program and environment Id of your AEMaaCS instance
    aio aem:spa:set-cors -p programId environmentId
    ```