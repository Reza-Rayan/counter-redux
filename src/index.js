import React from "react";
import ReactDom from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import reducer from "./reducers/reducer";

const store = createStore(reducer);


const rendering = () => ReactDom.render(<App
    value={store.getState()}
    onIncreament={() => store.dispatch({ type: 'INCREAMENT' })}
    onDecreament={() => store.dispatch({ type: 'DECREAMENT' })}
/>, document.getElementById('root'))

rendering();

store.subscribe(rendering)