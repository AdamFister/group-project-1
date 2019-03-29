import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";


export default {
	addFarmerAction({ state, commit }, farmerObj) {
		commit('addFarmer', farmerObj);
	},
	async getRecipesByRandom({ state, commit }, 		) {
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
						//console.log("about to enter reciperesltshander actions.js line 30");
						console.log(data.recipes[0]);
						commit('recipeResultsHandler', data.recipes[0]);
					});
				}
			)
			.catch(function (err) {
				console.log('Fetch Error :-S', err);
			});

	},
    addFarmerHandler( { state, commit }, farmerObj) {
        if (state.allFarmers.length != 0) {
            for (let i = 0; i < state.allFarmers.length; i++) { 
                console.log("name_entered: " + farmerObj.name);
                console.log("existing name: " + state.allFarmers[i].name + i);
                if (farmerObj.name == state.allFarmers[i].name) {
                    console.log("FARMER NAME TAKEN");
                    return 0;
                } 
    
            } console.log("NO MATCHES");
              commit("addFarmer", farmerObj);

        } else {
            console.log("PUSH TWO");
            commit("addFarmer", farmerObj);
        }
    }
}
