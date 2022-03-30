
const http = require('http')
//first parameter = incoming request (ex: client requesting from the web browser)
//second parameter = resposta ao request (ex: o que respondemos e mandamos de volta ao client)
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We cant find what you are looking for</p>
    <a href='/'>Back to home page</a>`)
})
server.listen(5000) //5000 its the port
//o que fazem os web servers? Ficam a ouvir e a ver se há requests