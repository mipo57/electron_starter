import * as ReactDOM from "react-dom";
import * as React from "react";
import {Dispatch, connect, Provider} from "react-redux"
import {AnyAction, createStore} from "redux"
import { Store, Reducer} from "./Store"

const store = createStore(Reducer)


ReactDOM.render(<Provider store={store}><div>Hello World</div></Provider>, document.getElementById("app"));

