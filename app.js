const express= require("express");
const bodyParser= require("body-parser");
const jwt= require("passport-jwt");
const cors= require("cors");
const path = require("path");

const aws = require('./routes/aws');
const users = require('./routes/users');

const app = express();

const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname , 'public')));

app.use('/aws' , aws);
app.use('/users' , users);

app.get('/', (req, res) => {
	res.json({say: "Hello World"});
});

app.get('*', (req, res) =>{
	res.send('Not Found');
});

app.listen(port , () => {
	console.log('Server listening at port : '+ port);
});