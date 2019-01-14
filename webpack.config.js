const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './src'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
                exclude: path.resolve(__dirname, 'node_modules') // 排除文件
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {
                test: /\.html$/,
                use: [
                    {//对html动态取名
                        loader: 'file-loader',
                        options: {
                            name: "[name].html"
                        }
                    },
                    {//让html和bundle.js进行区分,因为之前加载css,js的时候都会融入到出口的bundle里面去,
                        loader: "extract-loader"
                    },
                    {
                        loader: "html-loader"
                    }
                ]

            },
            {
                test: /\.(eot|woff2|woff|ttf|svg)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name][hash:5].min.[ext]',
                            limit: 5000,
                            publicPath: '',
                            outputPath: 'dist/',
                            useRelativePath: true
                        }
                    }
                ]
            },
            {test: /\.(png|jpg)$/, use: 'url-loader?limit=8192'},
        ]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]

}