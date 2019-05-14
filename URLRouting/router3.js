var url = require('url')

module.exports = {
    handleRequest : function(req, res){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        let path = url.parse(req.url).pathname;
        console.log(path);
        switch(path){
            case '/router3':
                res.write("/router3");
                res.end();
        }
    }
}