import {combineReducers} from "redux";
import {routerReducer as routing} from "react-router-redux";
import {
	IS_SHOW_CONSOLE,
} from "../actions/index";
import {login} from "../../login/reducers/index";

function showConsole(state = {
	consoleIsShow: false
}, action) {
	switch (action.type) {
		case IS_SHOW_CONSOLE:
			return Object.assign({
				...state,
				consoleIsShow: action.consoleIsShow
			});
		default:
			return state
	}
}

const rootReducer = combineReducers({
    login,
    routing,
	showConsole,
})

export default rootReducer
