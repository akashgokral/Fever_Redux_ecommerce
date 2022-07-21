import {legacy_createStore as createStore} from "redux"
import rootReducer from "./Reducer"

const Store = createStore(rootReducer);

export default Store ; 