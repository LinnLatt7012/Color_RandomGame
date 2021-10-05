var Port = process.env.PORT || 8080;
var express = require("express"),
    app = express();
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

// ========================
// Routes
// =========================
app.use("/",function(req, res){
    res.render("landing")
});



// ========================
// Port listen
// =========================
app.listen(Port, function () {
    console.log("sever-started");
})