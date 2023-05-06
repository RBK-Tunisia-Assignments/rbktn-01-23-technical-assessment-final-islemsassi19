const recipe = require("../model/recipesModel");
const getRecipe = (req, res) => {
  recipe.getAll((err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};
const deleteRecipe = (req, res) => {
  recipe.deleteRecipe((err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  }, req.params.id);
};
const postRecipe = (req, res) => {
  recipe.addRecipe(
    req.body.Cook_Time,
    req.body.Prep_Time,
    req.body.Recipe_Name,
    req.body.Serves,
    req.body.categorie,
    req.body.Recipe_Image,
    req.body.Recipe_Description,
    req.body.Recipe_Ingredients,
    req.body.users_user_Id,
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
};
const updateRecipe = (req, res) => {
  recipe.updateRecipe(
    req.body.Cook_Time,
    req.body.Prep_Time,
    req.body.Recipe_Name,
    req.body.Serves,
    req.body.categorie,
    req.body.Recipe_Image,
    req.body.Recipe_Description,
    req.body.Recipe_Ingredients,
    req.body.users_user_Id,
    req.params.id,
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
};
module.exports = {
  getRecipe,
  postRecipe,
  deleteRecipe,
  updateRecipe,
};







