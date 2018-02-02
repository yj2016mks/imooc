let http=require('http');
let url=require('url');
let util=require('util');
let fs=require('fs');

let server=http.createServer((req,res)=>{
    var pathname=url.parse(req.url).pathname;console.log(pathname)
    fs.readFile(pathname.substring(1),function(err,data){
        if(err){
            res.writeData(404,{
                'Content-Type':'text/html'
            })
        }else{
            res.writeHead(200,{
                'Content-Type':'text/html'
            })
            
            res.write(data.toString())
        }
            res.end()
    })

})

server.listen(3030,"127.0.0.1")
