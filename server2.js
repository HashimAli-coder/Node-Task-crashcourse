import http from 'http';
const port = process.env.port;

const users = [
    {id: 1 , name: 'hashim'},
    {id: 2 , name: 'luqman'},
    {id: 3 , name: 'moeid'},
    {id: 4 , name: 'saeed'},
];

// middlewares
const logger = (req , res , next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const jsonMiddleware = (req ,res , next ) => {
    res.setHeader('Content-Type' , 'application.json');
    next();
}

//handlerfunctionbs

const getUsersHandler = (req ,res) =>{
    res.write(JSON.stringify(users));
            res.end();
}

const getUserById = (req , res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));

    if(user){
        res.setHeader('Content-Type' , 'application.json');
        res.write(JSON.stringify(user));
        
    }
    else{
        res.setHeader('Content-Type' , 'application.json');
        res.statusCode = 404;
        res.write(JSON.stringify({message : 'User not found'}));
    }
    res.end();
}

const notFoundHandler = (req,res) => {
    res.setHeader('Content-Type' , 'application.json');
    res.statusCode = 404;
    res.write(JSON.stringify({message : 'Route not found'}));
    res.end();
}

//post
const createUserHandler = (req , res) => {
    let body ='';
    req.on('data' , (chunk) => {
        body += chunk.toString();
    });
    req.on('end' , () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    })
}

const server = http.createServer(( req , res) => {
    logger(req , res , () => {
        jsonMiddleware(req ,res, () => {
            if(req.url==='/api/users' && req.method==='GET'){
                getUsersHandler(req,res);
            }
            else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method==='GET'){
                getUserById(req,res);
            }else if ( req.url === '/api/users' && req.method === 'POST') {
                createUserHandler(req,res);
            }
            else{
                notFoundHandler(req,res);
            }
        })  
    });
});

server.listen(port , () => {
    console.log(`Server running on port : ${port}`)
})