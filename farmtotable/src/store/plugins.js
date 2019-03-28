    
import { STORAGE_KEY } from './mutations'

const localStoragePlugin = store => {
    // console.log("hello");
  store.subscribe((mutation, { allFarmers }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(allFarmers))
  })
}

export default process.env.NODE_ENV !== 'production'
  ? [localStoragePlugin]
  : [localStoragePlugin]