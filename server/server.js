// we're writing ES5 here because Node doesn't know ES2015 yet (it will soon)

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var publicFolder = '../client/src';

var USERS_FILE = path.join(__dirname, '/json/user.json');
console.log('USERS_FILE: ', USERS_FILE);

app.set('port', (process.env.port || 3001));

// serve contents from the public folder
//app.use('/', express.static(path.join(__dirname, publicFolder)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// set headers
app.use(function (req, res, next) {
  // Settings are set for the purpose of this POC, not for the real-world

  // Set CORS header to accept requests from anyone
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Disable caching
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/api/user', function (req, res) {
  fs.readFile(USERS_FILE, function (err, data) {
    if (err) {
      console.error('server.js GET /api/user - error reading file ', USERS_FILE);
      process.exit(1);
    }

    console.log('server.js GET /api/user - request query: ', req.query);
    res.json(JSON.parse(data));
  });
});

app.post('/api/todo', function (req, res) {
  fs.readFile(USERS_FILE, function (err, data) {
    if (err) {
      console.error('server.js POST /api/user - error reading file ', USERS_FILE);
      process.exit(1);
    }

    console.log('server.js POST /api/user - request params: ', req.params);
    console.log('server.js POST /api/user - request body: ', req.body);
    console.log('server.js POST /api/user - request query: ', req.query);
    var users = JSON.parse(data);

    // TODO Verify the request params before continuing
    var newTodo = {
      todo: req.body.todo,
      deadlineTS: req.body.deadlineTS,
      createTS: req.body.createTS
    };

    users.push(newTodo);

    fs.writeFile(USERS_FILE, JSON.stringify(users, null, 4), function (err) {
      if (err) {
        console.error('server.js POST /api/user - error writing to file ', USERS_FILE);
        process.exit(1);
      }

      res.json(users);
    });
  });
});

app.listen(app.get('port'), function () {
  console.log('NodeJS / Express Server started: http://localhost:', app.get('port') + '/');
});
