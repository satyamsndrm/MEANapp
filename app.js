const express= require("express");
const bodyParser= require("body-parser");
const jwt= require("passport-jwt");
const cors= require("cors");
const path = require("path");

const users = require('./routes/users');

const app = express();

const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname , 'public')));

app.use('/users' , users);


//	app.use(passport.initialize());
//	app.use(passport.session());
//	require('./config/passport')(passport);

app.get("/" , (req , res) => {
	res.send("Hello World");

});

app.listen(port , () => {
	console.log('Server listening at port : '+ port);
});