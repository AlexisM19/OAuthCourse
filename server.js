const express = require("express");
const app = new express();
const port = 5000;

app.use(express.static("./app"));

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${port} !`);
});
