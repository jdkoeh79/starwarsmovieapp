var express = require('express');

var app = express();  // assigns all express methods to 'app' (app.get, app.set, etc)


app.set('view engine', 'ejs');

var routes = require('./routes');

// Static assets
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


// Routes

// home (responds to a get request on the home page)
app.get('/', routes.home);

// movie single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

// notFound
app.get('*', routes.notFound);


// Local Development Server
// app.listen(3000, function(){
// 	console.log('Server running on localhost:3000');
// });

// Listen to production environment port OR localhost:3000
app.listen(process.env.PORT || 3000);