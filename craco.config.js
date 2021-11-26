const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [{
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: {
                        '@primary-color': '#343E4B',
                        '@link-color': '#343E4B',
                        '@font-size-base': '14px',
                        '@heading-color': '#343E4B',
                        '@text-color': '#343E4B',
                        '@text-color-secondary': '#E2A12E',
                        '@border-color-base': '#343E4B',
                    },
                    javascriptEnabled: true,
                },
            },
        },
    }, ],
};