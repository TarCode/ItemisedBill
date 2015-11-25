var express = require('express'),
    exphbs = require('express-handlebars'),
    bodyParser = require('body-parser'),
    app = express()
    readCSV = require('./methods/readCSV'),
    getPhoneCalls = require("./methods/getPhoneCalls"),
    callDuration = require("./methods/callDuration");

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var bill = readCSV.readCSV('./ItemisedBill.csv');
var mtn = getPhoneCalls.getPhoneCalls(bill, "MTN");
    mtn = callDuration.callDuration(mtn);
var vodacom = getPhoneCalls.getPhoneCalls(bill, "Vodacom");
    vodacom = callDuration.callDuration(vodacom);
var cellc = getPhoneCalls.getPhoneCalls(bill, "CellC");
    cellc = callDuration.callDuration(cellc);



app.get('/', function(req, res){
  res.render('home', {all: bill.length, mtn: mtn.length, vodacom : vodacom.length, cellc : cellc.length});
});

app.get('/all', function(req, res){
  res.render('all', {bill: bill, all: bill.length, mtn: mtn.length, vodacom : vodacom.length, cellc : cellc.length});
});

app.get('/mtn', function(req, res){
  res.render('provider', {bill: mtn, provider : "MTN", all: bill.length, mtn: mtn.length, vodacom : vodacom.length, cellc : cellc.length});
});

app.get('/vodacom', function(req, res){
  res.render('provider', {bill: vodacom, provider: "Vodacom", all: bill.length, mtn: mtn.length, vodacom : vodacom.length, cellc : cellc.length});
});

app.get('/cellc', function(req, res){
  res.render('provider', {bill: cellc, provider: "Cell C", all: bill.length, mtn: mtn.length, vodacom : vodacom.length, cellc : cellc.length});
});

var port = process.env.PORT || 3000;
var server = app.listen(port, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});
