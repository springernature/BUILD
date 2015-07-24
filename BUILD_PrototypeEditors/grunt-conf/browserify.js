'use strict';
module.exports = {

    dev: {
        options: {
            verbose: false,
            transform: [
                ['browserify-istanbul', {defaultIgnore: false, ignore: ['**/node_modules/angular*/**', '**/test/**', '**/tests/**', '**/*.json']}]
            ]
        },
        files: {
            'dev/assets/bundle.js': ['dev/client.js', 'node_modules/norman-prototype-editors-client/index.js']
        }
    },
    sample: {
        options: {
            watch: true,
            browserifyOptions: {
                debug: true                    // true to create map file
            },
            external: [
                'angular',
                'angular-cookies',
                'angular-resource',
                'angular-sanitize',
                'angular-ui-router'
            ]
        },
        files: {
            'dev/assets/bundle.js': [ 'sample/client/app.js' ]
        }
    },
    vendor: {
        // External modules that don't need to be constantly re-compiled
        options: {
            debug: false,
            alias: [
                'angular:',
                'angular-cookies:',
                'angular-resource:',
                'angular-sanitize:',
                'angular-ui-router:'
            ],
            external: null // Reset this here because it's not needed
        },
        files: {
            'dev/assets/vendor.js': [ '.' ]
        }
    }
};