import React from "react";
import axios from "axios";
import "../App.css";
import { useState } from "react";
const RecipeCard = ({ e, setOne, changeView }) => {
  const [isupdating, setIsUpdating] = useState(false);
  const [Cook_Time, setCook_Time] = useState(0);
  const [Prep_Time, setPrep_Time] = useState(0);
  const [users_user_Id] = useState(1);
  const [Recipe_Name, setRecipe_Name] = useState("");
  const [Serves, setServes] = useState(0);
  const [categorie, setcategorie] = useState("");
  const [Recipe_Image, setRecipe_Image] = useState("");
  const [Recipe_Description, setRecipe_Description] = useState("");
  const [Recipe_Ingredients, setRecipe_Ingredients] = useState("");
  return (
    <div className="card">
      <button
        onClick={() => {
          axios.delete(`http://localhost:4000/recipe/${e.Recipe_Id}`);
        }}
      >
        delete
      </button>
      <button
        onClick={() => {
          setIsUpdating(!isupdating);
        }}
      >
        {isupdating ? "cancel" : "update"}
      </button>
      {!isupdating ? (
        <>
          <div
            className="header"
            onClick={() => {
              setOne(e);
              changeView("OneRecipe");
            }}
          >
            <img width="500" height="60" src={e.Recipe_Image} alt="" />
            <div className="icon">
              <a href="/">
                <i className="fa fa-heart-o" />
              </a>
            </div>
          </div>
          <div className="text">
            <h1 className="food">{e.Recipe_Name}</h1>
            <i className="fa fa-clock-o"> {e.Cook_Time} Mins</i>
            <i className="fa fa-users"> Serves {e.Serves}</i>

            {/* <p className="info">{e.Recipe_Description}</p> */}
          </div>
        </>
      ) : (
        <div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setRecipe_Name(e.target.value)}
            />
          </div>{" "}
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
            onClick={() => {
              setIsUpdating(false);

              axios.put(`http://localhost:4000/recipe/${e.Recipe_Id}`, {
                Cook_Time,
                Prep_Time,
                Recipe_Name,
                Serves,
                categorie,
                Recipe_Image,
                Recipe_Description,
                Recipe_Ingredients,
                users_user_Id,
              });
            }}
          >
            {" "}
            update
          </button>
        </div>
      )}
    </div>
  );
};



export default RecipeCard;