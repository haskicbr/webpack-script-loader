const path = require('path');

const replaceInFile = require('replace-in-file');

const replaceOptions = {
    files: 'test-replace/*.php',
    from: /FOO_BAR/g,
    to: 'test replace success',
};

const results = replaceInFile(replaceOptions);

console.log('Replacement results:', results);

module.exports = {

    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /index\.exec\.js$/,
                use: ['script-loader']
            },

            {
                test: /test\.php$/,
                loader: 'string-replace-loader',
                options: {
                    search: 'jQuery',
                    replace: 'window.$',
                    strict: true
                }
            }

        ],
    },
};
