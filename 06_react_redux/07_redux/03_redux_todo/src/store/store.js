import { createStore } from "redux";
import taskReducer from "./todo/reducer";

const store = createStore(taskReducer);

export default store;
