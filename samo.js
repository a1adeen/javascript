console.log("Hello, world");
const express = require('express')
const app = express()

    

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000!");
});


const path = require('path')
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

