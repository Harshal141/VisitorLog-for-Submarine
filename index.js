// setup express app
const express = require('express')
const app = express()
const port = 3000

// middleware to get the request body
app.use(express.json());
app.use(express.urlencoded());

const path = require("path");
const fs = require("fs");

// show case the main file
app.get("/", (req, res,next) => {
 res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/data_page", (req, res,next) => {
  res.sendFile(path.join(__dirname, "public", "data.html"));
});

//for using css in index.html
app.use(express.static(__dirname + '/public'));

app.post("/", (req, res,next) => {
  const users = require("./public/data/data.json");
  const {vAgency,vSize,vArea,vWork} = req.body;
  var d = new Date();
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  let user = {
    name: hour+":"+min+":"+sec,
    agency: vAgency,
    size: vSize,
    area: vArea,
    work: vWork
  };
  users.push(user);
  fs.writeFile('./public/data/data.json', JSON.stringify(users), function (err) {
      if (err) throw err;
      console.log('Updated!');
  });
  res.redirect('/')
});

app.get("/data", (req, res,next) => {
  fs.readFile("./public/data/data.json", function(err, data) {
  // if (err) throw err;
  // Converting to JSON
  const users = JSON.parse(data);
  console.log(users);
  });
  res.sendFile(path.join(__dirname, "public", "data.html"));
});

// remove id based on time
app.post('/data_remove',(req,res)=>{
  const {time} = req.body;
  const users = require("./public/data/data.json");
  for( var i = 0; i < users.length; i++){ 
    if ( users[i].name === time) { 
        users.splice(i, 1); 
    }
  }
  fs.writeFile('./public/data/data.json', JSON.stringify(users), function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
  res.redirect('/data');
})

app.get('*', function (req, res) {
  res.redirect('/');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`http://localhost:${port}`)
})