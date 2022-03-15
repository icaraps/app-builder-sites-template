const path = require('path');

const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    async prompting() {
        this.answers = await this.prompt([
            {
                type: 'input',
                name: 'NAME',
                message: 'Set Store name'
            },
            {
                type: 'input',
                name: 'AEM_SERVER',
                message: 'Set AEM URL (e.g. http://aem:4502)'
            },
            {
                type: 'input',
                name: 'AEM_GRAPHQL_ENDPOINT',
                message: 'Set AEM GraphQL endpoint',
                default: '/content/_cq_graphql/global/endpoint.json'
            },
            {
                type: 'input',
                name: 'AEM_ROOT_PAGE',
                message: 'Set the AEM root page',
                default: '/content/wknd/us/en'
            },
            {
                type: 'input',
                name: 'AEM_USERNAME',
                message: 'Set the AEM user name',
                default: 'admin'
            },
            {
                type: 'password',
                name: 'AEM_PASSWORD',
                mask: '*',
                message: 'Set the AEM user password',
                default: 'admin'
            },
            {
                type: 'input',
                name: 'MAGENTO_GRAPHQL',
                message: 'Set Magento GraphQL endpoint (e.g. http://magento:8080/graphql)',
            }
        ]);
    }

    writing() {
        const props = {
            NAME: this.answers.NAME,
            AEM_SERVER: this.answers.AEM_SERVER,
            AEM_GRAPHQL_ENDPOINT: this.answers.AEM_GRAPHQL_ENDPOINT,
            MAGENTO_GRAPHQL: this.answers.MAGENTO_GRAPHQL,
            AEM_ROOT_PAGE: this.answers.AEM_ROOT_PAGE,
            AEM_USERNAME: this.answers.AEM_USERNAME,
            AEM_PASSWORD: this.answers.AEM_PASSWORD
        };

        this.log('template props', JSON.stringify(props, null, 2));

        this.sourceRoot(path.join(__dirname, './templates/'));
        this.fs.copyTpl(
            this.templatePath('./**/*'),
            this.destinationPath('./'),
            props
        );
    }
};