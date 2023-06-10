const getCategoriesData = async () => {
  // code here
  try {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const user = await res.json();
    return user;
  } catch (err) {
    return "something went wrong";
  }
};

const getIngredientData = async () => {
  // code here
  try {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
    );
    const user = await res.json();
    return user;
  } catch (err) {
    return "something went wrong";
  }
};

window.onload = function () {
  //  getCategoriesData
  document
    .getElementById("get-category-data")
    .addEventListener("click", async () => {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        const data = await res.json();
        displayData(data.meals);
        return data;
      } catch (err) {
        return "something went wrong";
        // alert("something went wrong");
      }
    });

  //
  document.getElementById("get-ingredient-data")
    .addEventListener("click", async () => {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
        );
        const data = await res.json();
        displayData(data.meals);
        return data;
      } catch (err) {
        return "something went wrong";
      }
    });
  //  get the buttons here and add click event
};
function displayData(data) {
  document.getElementById("displayItems").innerHTML = "";
  data.map(function (meals) {
    comsole.log(meals)
    let div = document.createElement("div");
    var img = document.createElement("img");
    img.src = meals.strMealThumb;
    var title = document.createElement("h3");
    title.innerHTML = meals.strMeal;

    div.append(img, title);
    document.getElementById("displayItems").append(div);
  });
}
// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}