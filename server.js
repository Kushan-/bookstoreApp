// Webpack server
var webpack 		= 	require('webpack');
var WebpackDevServer 	= 	require('webpack-dev-server');
var config 	= 	require('./webpack.config');
var http 	= 	require('http')
var path 	= 	require('path');
var url 	= 	require('url');


// dummy data
var data = ["its Working"];

// building Webpack Server
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
  '/api*': {
    target:'http://localhost:8705'
  }
}
}).listen(9000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:9107');
});

// node proxy
http.createServer(function(req,res){
	console.log(req.method);
	var hostname = req.headers.host.split(":")[0];
    var pathname = url.parse(req.url).pathname;
if(req.method == "POST" ){
	console.log("================== goPage");
	//Ajay's code
	res.writeHead(200, {
			"Content-Type": "text/html"
	});
	res.write(JSON.stringify(data));
	res.end()
}
}).listen(8707, function(){
	console.log('proxy port at 8707');
})


