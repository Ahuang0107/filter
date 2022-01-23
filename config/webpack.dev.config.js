const path = require("path");
module.exports = () => {
    const rootFolder = process.cwd();
    const port = 12000;
    return {
        mode: 'development',
        output: {
            path: path.join(rootFolder, 'dist'),
            filename: 'js/[name].js',
        },
        devtool: 'eval-cheap-module-source-map',
        devServer: {
            port: port,
            compress: true,
            open: true,
        }
    }
}
