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

app.get('/api/wolframalpha/:appid/:query', route.queryWolframAlpha);

app.get('/', route.allUsers);
app.post('/', route.createUser);
app.get('/:userName', route.listAllMessages);
app.post('/:userName', route.createMessage);
app.get('/:userName/:messageId', route.showMessage);

app.listen(app.get("port"), function() {
	console.log("listening on port " + app.get("port"));
});

