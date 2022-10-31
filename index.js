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

// post req to update data in file
// app.post("/", (req, res,next) => {
//     console.log(req.body);
//     // res.send(req.body);
//     fs.appendFile('./public/data/data.json', JSON.stringify(req.body)+",", function (err) {
//         if (err) throw err;
//         console.log('Updated!');
//     });
//     res.redirect('/')
// });

app.post("/", (req, res,next) => {
  console.log(req.body);
  const users = require("./public/data/data.json");
  const {name,email} = req.body;
  let user = {
    name: name,
    email: email
  };
  users.push(user);

  fs.writeFile('./public/data/data.json', JSON.stringify(users), function (err) {
      if (err) throw err;
      console.log('Updated!');
  });
  res.redirect('/')
});

app.get('/data', (req, res) => {
  fs.readFile("./public/data/data.json", function(err, data) {
  // if (err) throw err;
  // Converting to JSON
  const users = JSON.parse(data);
  console.log(users);
  res.send(users);
});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})