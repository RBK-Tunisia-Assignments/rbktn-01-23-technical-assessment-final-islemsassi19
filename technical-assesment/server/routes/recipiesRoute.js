const express = require("express");
const router = express.Router();
const recipes = require("../controller/recipesController");

router.get("/", recipes.getRecipe);
router.post("/", recipes.postRecipe);
router.delete("/:id", recipes.deleteRecipe);
router.put("/:id", recipes.updateRecipe);


module.exports = router;
