const express = require("express");
const app = express();
const cors = require("cors");
const recipes = require("./routes/recipesRoute");
const PORT = 4000;
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// TODO - add additional route handlers as necessary
app.use("/recipe", recipes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});