var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(3080, function(){
	   console.log('Server Listening');
});
