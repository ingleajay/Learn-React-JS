// store all state globally

import rootreducer from "./reducers";
import { createStore } from "redux";

const store = createStore(rootreducer);

export default store;
