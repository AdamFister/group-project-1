export default {
  addFarmerAction({ state, commit }, farmerObj) {
    commit('addFarmer', farmerObj);
  },
  async getRecipesByRandom({ state, commit }, searchStr) {
    var self = this;
    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1', {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "a585a9b005msh459bd2f7657ed56p17e34bjsn1f0dd44c7986"
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
    })
      .then(
        function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          // Examine the text in the response
          response.json().then(function (data) {
            console.log("about to enter reciperesltshander actions.js line 30");
            console.log(data);
            self.store.commit('recipeResultsHandler', data);
          });
        }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });

  }
}