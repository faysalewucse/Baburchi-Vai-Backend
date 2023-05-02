const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const chefData = require("./db/data.json");

app.get("/", (req, res) => {
  res.send("Great! The server is running.");
});

app.get("/chefs", (req, res) => {
  res.send(chefData);
});

app.get("/chef/:chefId", (req, res) => {
  const { chefId } = req.params;
  // find chef by id
  const chef = chefData.find((chef) => chef.id === parseInt(chefId));
  res.send(chef);
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
