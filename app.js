var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

var campground = [
	{name: "shine6", image: "./public/img/shine.jpg"},
	{name: "office7", image: "./public/img/office.jpg"}
	
]

app.get("/",(req,res)=>{
	res.render("index");
});
//app.use('/public',express.static(path.join(__dirname, 'public')));

app.use('/public',express.static(path.join(__dirname, 'public')));

app.get("/campground",(req,res)=>{
	res.render("campground",{campground:campground});
});

app.post("/campground",(req,res)=>{
	var name = req.body.name;
	var image = req.body.image;
	console.log(req.body);
	var newCampground = {name:name, image:image}
	campground.push(newCampground);
	res.redirect("campground");
});

app.get("/campground/new",(req,res)=>{
	res.render("new");
});

app.listen(3000,()=>{
	console.log("Yelpcamp server is started..");
})