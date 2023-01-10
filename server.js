const http = require("http");
const app = require("./app");
const mongodb = require("mongodb");

let db;
const connectionString = 
    "mongodb+srv://solijonov95:sa199506%40%40@cluster0.lx8gpju.mongodb.net/reja";
mongodb.connect(
    connectionString, 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, 
(err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succses");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
        console.log(
            `The server is runnig successfully on part: ${PORT}, http://localhost:${PORT}`
        );
       });
      }
    }
);


