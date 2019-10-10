const path = require("path");
const webpack = require("webpack");

/**
 * Override the existing webpack config from CRA without ejecting
 */
module.exports = function override(config, env) {
    /**
     * Setup loader for files outside web
     */
    const babel = config.module.rules
        .find(rule => "oneOf" in rule)
        .oneOf.find(rule => /babel-loader/.test(rule.loader));

    if (!Array.isArray(babel.include)) {
        babel.include = [babel.include];
    }
    babel.include = babel.include.concat([
        path.resolve(__dirname, "..", "shared")
    ]);
    // eslint-disable-next-line no-param-reassign
    config.plugins = (config.plugins || []).concat([
        new webpack.DefinePlugin({
            __DEV__: env !== "production"
        })
    ]);
    return config;
};
