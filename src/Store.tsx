import * as React from "react"
import { Dispatch, connect } from "react-redux"
import { AnyAction } from "redux"

export class Store {	
}

interface Action extends AnyAction {
    type: string;
    content: any;
}

export const Reducer = (state: Store = new Store(), action: Action) => {
	switch(action.type) {
		default:
			return state;
	}
}

