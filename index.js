const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("HELLO")
})

app.listen(5000)
