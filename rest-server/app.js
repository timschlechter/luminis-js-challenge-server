var express = require('express');
var route = require('./route');
var cors = require('./cors');

var app = express();

app.set("port", process.env.PORT || 8080);
app.use(express.bodyParser());

//allow for cross origin resource sharing...
app.use(cors.allow());

app.param('userName', route.retrieveUser);
app.param('messageId', route.retrieveMessage);

app.get('/', route.allUsers);
app.put('/', route.createUser);
app.post('/', route.createUser);
app.get('/:userName', route.listAllMessages);
app.put('/:userName', route.createMessage);
app.post('/:userName', route.createMessage);
app.get('/:userName/:messageId', route.showMessage);

app.listen(app.get("port"));
console.log("listening on port " + app.get("port"));
