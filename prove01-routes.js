const users = [];

//function to create server and check url
const proveHandler = ((req, res) => {

    //gets info from url entered
    const url = req.url;
    const method = req.method;

    if (url === '/') {
       
        //this will write to the server
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<header><title>Prove Assignment Week 1</title></header>')
        res.write('<body><h3>Welcome to the Prove Assignment for Week 1</h3></body>')
        res.write('<body><h4>Please add your user name below</h4></body>')
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users'){        
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<header><title>Prove Assignment Week 1</title></head>');
        res.write('<body><h3>Current list of users</h3>');
        res.write('<ol>');  
        for (let i = 0; i < users.length; i++) {
            console.log(users[i]);
            res.write(`<li>${users[i]}</li>`);
        } 
        res.write('</ol></body></html>');
        return res.end();
    }

    //simple html response 
    if (url === '/create-user' && method === 'POST'){
        const body = [];
        //getting request from data event
        req.on('data', chunk => {
            //adds data to the body array
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
            users.push(parsedBody.split('=')[1]);    
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
});

module.exports = proveHandler;