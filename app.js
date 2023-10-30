// express
const express = require("express");
const app = express();

// route hello world
app.get("/", async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  res.send("Hello World!");
});

app.listen(80, () => {
  console.log("Server started on port 80");
});
