import React, { useState } from "react";

import axios from "axios";
const Add = () => {
  const [Cook_Time, setCook_Time] = useState(0);
  const [Prep_Time, setPrep_Time] = useState(0);
  const [users_user_Id] = useState(1);
  const [Recipe_Name, setRecipe_Name] = useState("");
  const [Serves, setServes] = useState(0);
  const [categorie, setcategorie] = useState("");
  const [Recipe_Image, setRecipe_Image] = useState("");
  const [Recipe_Description, setRecipe_Description] = useState("");
  const [Recipe_Ingredients, setRecipe_Ingredients] = useState("");
  const handleclick = (body) => {
    axios.post("http://localhost:4000/recipe", body);
  };
  return (
    <div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setRecipe_Name(e.target.value)}
        />
      </div>
      <div>
        <label>Cook_Time:</label>
        <input
          type="number"
          placeholder="Time"
          onChange={(e) => setCook_Time(e.target.value)}
        />
      </div>
      <div>
        <label>Prep_Time:</label>
        <input
          type="number"
          placeholder="Time"
          onChange={(e) => setPrep_Time(e.target.value)}
        />
      </div>
      <div>
        <label>Serves:</label>
        <input
          type="number"
          placeholder="serves"
          onChange={(e) => setServes(e.target.value)}
        />
      </div>
      <div>
        <label>categorie:</label>
        <input
          type="text"
          placeholder="categorie"
          onChange={(e) => setcategorie(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setRecipe_Description(e.target.value)}
        />
      </div>
      <div>
        <label>Ingredients:</label>
        <input
          placeholder="Ingredients"
          onChange={(e) => setRecipe_Ingredients(e.target.value)}
        />
      </div>

      <div>
        <label>Image:</label>
        <input
          type="text"
          placeholder="Image"
          onChange={(e) => setRecipe_Image(e.target.value)}
        />
      </div>
      <button
        onClick={() =>
          handleclick({
            Cook_Time,
            Prep_Time,
            Recipe_Name,
            Serves,
            categorie,
            Recipe_Image,
            Recipe_Description,
            Recipe_Ingredients,
            users_user_Id,
          })
        }
      >
        Create Recipe
      </button>
    </div>
  );
};
export default Add;



