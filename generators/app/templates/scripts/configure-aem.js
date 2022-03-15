/**
 * TODO
 * 
 * Step 1: Page properties
 * AEM username + password (could later be done via IMS login)
 * 
 * Step 2: CM Variable
 * Check what's required
 * Checkout repo, add script and AEM root page question
 * 
 * AEM username and password (later on via IMS)
 * everything else via AIO CM cli
 * 
 */

const { URLSearchParams } = require('url');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const axios = require('axios').default;
const nextConfig = require('../next.config');

(async () => {
    // Get configuration values from NextJS config
    const { AEM_SERVER, AEM_USERNAME, AEM_PASSWORD, AEM_ROOT_PAGE } = nextConfig.env;

    // Get pages action
    const { stdout } = await exec('aio app:get-url --json');
    const actions = JSON.parse(stdout);
    const url = actions.runtime.pages;

    console.log(`Deployed application is located at ${url}.`);

    // Update property on AEM root page
    const params = new URLSearchParams({ 
        './remoteSPAUrl': url 
    });
    const response = await axios({
        method: 'POST',
        url: `${AEM_SERVER}${AEM_ROOT_PAGE}/_jcr_content`,
        headers: { 
            'content-type': 'application/x-www-form-urlencoded' 
        },
        data: params.toString(),
        auth: {
            username: AEM_USERNAME,
            password: AEM_PASSWORD
        }
    });

    if (response.status !== 200) {
        console.error('There was an error when updating the AEM page.');
        return;
    }

    console.log(`AEM root page "${AEM_ROOT_PAGE}" was updated with the deployed application URL.`);
})();

