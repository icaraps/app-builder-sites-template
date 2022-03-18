const path = require('path');

const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    async prompting() {
        this.answers = await this.prompt([
            {
                type: 'input',
                name: 'APP_NAME',
                message: 'App name',
                default: path.basename(process.cwd())
            },
            {
                type: 'input',
                name: 'AEM_HOST',
                message: 'AEM instance URL',
                default: 'https://wknd.site',
            },
            {
                type: 'input',
                name: 'AEM_GRAPHQL',
                message: 'AEM GraphQL endpoint',
                default: '/content/_cq_graphql/global/endpoint.json',
                dependsOn: ['AEM_HOST'],
            },
            // {
            //     type: 'input',
            //     name: 'MAGENTO_GRAPHQL',
            //     message: 'Magento GraphQL endpoint (e.g. http://magento:8080/graphql)',
            // }
        ]);
    }

    writing() {
        const props = {
            APP_NAME: this.answers.APP_NAME,
            AEM_HOST: this.answers.AEM_HOST,
            AEM_GRAPHQL: this.answers.AEM_GRAPHQL,
            // MAGENTO_GRAPHQL: this.answers.MAGENTO_GRAPHQL
        };

        // this.log('template props', JSON.stringify(props, null, 2));

        this.sourceRoot(path.join(__dirname, './templates/'));
        this.fs.copyTpl(
            this.templatePath('./**/*'),
            this.destinationPath('./'),
            props
        );
    }

    install() {
        // Ensure the cloudmanager and aem aio CLI plugins are installed
        const { stdout } = this.spawnCommandSync('aio', ['plugins'], { encoding: 'utf-8', stdio: [process.stderr] });

        if (!stdout.includes('@adobe/aio-cli-plugin-aem')) {
            this.log('Install Adobe I/O CLI AEM Plugin');
            this.spawnCommandSync('aio', ['plugins:install', '@adobe/aio-cli-plugin-aem']);
        }

        if (!stdout.includes('@adobe/aio-cli-plugin-cloudmanager')) {
            this.log('Install Adobe I/O CLI Cloud Manager Plugin');
            this.spawnCommandSync('aio', ['plugins:install', '@adobe/aio-cli-plugin-cloudmanager']);
        }
    }
};
