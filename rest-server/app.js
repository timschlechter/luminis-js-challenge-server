var express = require('express');
var route = require('./route');

var app = express();

app.set("port", process.env.PORT || 8080);
app.use(express.bodyParser());

app.param('userName', route.retrieveUser);
app.param('messageId', route.retrieveMessage);

app.get('/', route.allUsers);
app.put('/', route.createUser);
app.get('/:userName', route.listAllMessages);
app.put('/:userName', route.createMessage);
app.get('/:userName/:messageId', route.showMessage);

app.listen(app.get("port"));
console.log("listening on port " + app.get("port"));
