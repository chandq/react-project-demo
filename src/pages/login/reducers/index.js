import * as types from "../actions/index";
export function login(state = {
	data: {
		id: 0
	},
	pwdValid: true,
	loading: false,
}, action) {
	switch (action.type) {
		case types.LOGIN:
			return Object.assign({}, state, {
				//login:action.login
				data: action.data,
				loading: false
			});
		case types.UN_LOGIN:
			return Object.assign({}, state, {
				data: {},
			});
		case types.CHECK_PASSWORD:
			return Object.assign({}, state, {
				pwdValid: action.pwdValid,
				loading: action.loading,
			});
		case types.START_OR_END_PENDING:
			return Object.assign({}, state, {
				loading: action.loading,
			});
        case types.FETCH_LANGUAGE:
            return Object.assign({}, state, {
                language:action.language
            });
		default:
			return state
	}
}
