const webpack = require('webpack');
const path = require('path');

module.exports = {
    env: {
        //setup environment vartiable here
    },
    sassOptions: {
        // if you using sass enable this shit :)
        //includePaths: [path.join(__dirname,'./styles')]
    },
    webpack: (config, _options) => {
        config.plugins.push(new webpack.ProvidePlugin({
            // apply webpack plugins like minify, jquery, popper, boostraps or others.
        }))
        return config;
    },
    distDir: "build/", // build folders
    compress: true,
    poweredByHeader: false,
    reactStrictMode: false,
}
