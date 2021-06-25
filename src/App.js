
import './App.css';
import {createStore,combineReducers} from "redux";
import {Provider} from "react-redux"
import countReducer from "./countReducer"
import Counter from "./Counter"
import modelReducer from "./modelReducer"
import productReducer from "./productReducer"
import { composeWithDevTools } from 'redux-devtools-extension';

//components
import Model from './Model';
function App() {

  const store = createStore(combineReducers({
  countState:countReducer,
  modelState:modelReducer,
  productState:productReducer
}),composeWithDevTools())
  return (
    <Provider store={store}>
      <Counter />
      <Model />
    </Provider>
  );
}

export default App;
