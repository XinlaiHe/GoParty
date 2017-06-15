const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, '/')));

app.listen(3000, function (err) {
	if(err) console.log(err);
	else console.log('App is listening on port 3000!');
});