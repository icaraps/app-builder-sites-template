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
                message: 'Set AEM URL (e.g. aem:4502)'
            },
            {
                type: 'input',
                name: 'AEM_GRAPHQL_ENDPOINT',
                message: 'Set AEM GraphQL endpoint',
                default: '/content/_cq_graphql/global/endpoint.json'
            },
            {
                type: 'input',
                name: 'MAGENTO_GRAPHQL',
                message: 'Set Magento GraphQL endpoint (e.g. magento:8080/graphql)',
            }
        ]);
    }

    writing() {
        const props = {
            NAME: this.answers.NAME,
            AEM_SERVER: this.answers.AEM_SERVER,
            AEM_GRAPHQL_ENDPOINT: this.answers.AEM_GRAPHQL_ENDPOINT,
            MAGENTO_GRAPHQL: this.answers.MAGENTO_GRAPHQL
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