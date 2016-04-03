import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';

const compiler = webpack(config);

const options = {
    publicPath: config.output.publicPath
};

const server = new WebpackDevServer(compiler, options);

const host = '0.0.0.0';
const port = 8080;

server.listen(port, host, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log(`Listening at ${host}:${port}`);
    }
});