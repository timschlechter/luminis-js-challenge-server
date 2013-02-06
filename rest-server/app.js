var express = require('express');
var route = require('./route');

var app = express();

app.set("port", process.env.PORT || 8080);
app.use(express.bodyParser());

app.param('userName', route.retrieveUser);

app.get('/', route.allUsers);
app.put('/', route.createUser);
app.get('/:userName', route.listAllMessages);
app.put('/:userName', route.createMessage);

app.listen(app.get("port"));
console.log("listening on port " + app.get("port"));
