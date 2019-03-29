import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";


export default {
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
