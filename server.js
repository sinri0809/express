const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// app.use(express.static(path.join(__dirname, 'client/public')))

app.get("/", (req, res) => {
  res.send("HELLO")
});

app.get("/api", (req, res) => {
  res.json({
    "users": ["userOne", "userTwo", "userThree"]
  })
})

app.get("/api/hello", (req, res) => {
  res.send({
    message: "Helllo express"
  })
})

// app.listen(5000)4
app.listen(port, () => console.log(`listening on port ${port}`))
