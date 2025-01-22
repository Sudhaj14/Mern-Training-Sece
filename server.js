// 1. Import http module
const http = require('http');
const calculator = require('./calculator');

// Perform calculations
const sum = calculator.add(9, 8);
const diff = calculator.sub(9, 8);
const pro = calculator.mul(9, 8);
const quo = calculator.div(9, 8);

// 2. Create http server
const server = http.createServer((req, res) => {
    
    res.writeHead(200, {"Content-Type": "text/plain"});
    

    res.end("The sum is "+sum.toString() + "\nThe diff is " + diff.toString() + "\nThe Product is " +pro.toString() +
     "\nThe quotient is " +quo.toString());
});

// 3. Start the server
server.listen(3000, () => {
    console.log("Server running at http://127.0.0.1:3000/");
});

//Filesystem

