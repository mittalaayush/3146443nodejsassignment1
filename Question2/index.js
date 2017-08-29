var express = require("express");
var bodyParser = require("body-parser");
var moment = require("moment");
var fs = require("file-system");
var morgan = require('morgan');

var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});


var app = express();
app.use(morgan('combined', {stream: accessLogStream}));
app.listen(3000);

app.set("view engine", "hbs");

app.use("/" , bodyParser.urlencoded({extended:false}));

app.get("/form",function(req,res,next){
    var file = fs.readFileSync(__dirname + "/assets/form.html","utf8");
    res.send(file);
});

app.post("/submit",function(req,res){
   var name = req.body.name;
   var dob = new Date(req.body.dob);
   var currentDate = moment();
   var diff = Math.round((currentDate - dob)/(1000*60*60*24));
   dispMsg = "Hey " + name + ", you have lived on this planet for "+diff+" days."
    res.render(
        "display",{message: dispMsg}
    );


});

app.use("/assets",express.static(__dirname+"/assets"));
