var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Restraunt = require('./Model/restrauntModel');

const app = express();

// Mongoose connection
// mongoose.connect("");
// const connection = mongoose.connection;
// //One time event when the server is running
// connection.once("open", () => console.log("mongdb running"));
var mongoDB = 'mongodb://127.0.0.1:27017/restraunts';
mongoose.connect(mongoDB, {
	useNewUrlParser: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function (callback) {
	console.log("Connection succeeded.");
});
sampleData = [{
	restrauntID: "1234",
	restaruntName: "Biryani House",
	cuisines: "Japan",
	averageCostForTwo: '1100',
	currency: 'Indian Rupee',
	hadTable: 'Yes',
	hasOnline: 'No',
	aggregate: '4.8',
	ratingColor: 'green',
	ratingText: 'Excellent',
	votes: 314
}]
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send("hello, world"));
app.get('/displayRestraunts', (req, res) => {
	Restraunt.find({}, (error, data) => {
		jsonData = {}
		jsonData['data'] = data;
		res.send(jsonData);
	});
});
app.post('/uploadRestraunts', (req, res) => {
	restrauntsList = req.body.data;
	for (var i = 0; i < restrauntsList.length; i++) {
		restraunt = new Restraunt(restrauntsList[i]);
		console.log(restraunt);
		restraunt.save(function (data, error) {
			if (error) {
				console.log(error);
			} else {
				console.log(data);
			}
		});
	}
	res.send("Done");
})

app.listen(4000, () => console.log("server running with port 4000"));