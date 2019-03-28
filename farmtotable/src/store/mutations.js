export const STORAGE_KEY = 'farmtotable-key'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
	window.localStorage.clear()
}

export const mutations = {
	// increment (state) {
	//   state.counter++;
	// },
	// decrement (state){
	//   state.counter--;
	// },
	addProduce(state, produceToAdd) {
		state.allFarmers[state.allFarmers.length - 1].produce.push(produceToAdd.produce);
		console.log(state.allFarmers[state.allFarmers.length - 1])
	},
	// addName (state, nameToAdd) {
	//   state.farmers.name = nameToAdd.name;
	// },
	// addLocation (state, locationToAdd) {
	//   state.farmers.location = locationToAdd.location;
	// },
	addFarmer(state, farmerObj) {
		state.allFarmers.push(farmerObj);
	},
	recipeResultsHandler(state, recipeResults) {
		console.log(recipeResults);
		console.log("in the recipes mutations.js line 30");
		state.recipes = recipeResults;
	}
}