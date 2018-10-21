import * as types from "../actions/index";
export function login(state = {
	data: {
		id: 0
	},
	pwdValid: true,
	loading: true,
}, action) {
	switch (action.type) {
		case types.LOGIN:
			return Object.assign({}, state, {
				//login:action.login
				data: action.data
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
        case types.FETCH_LANGUAGE:
            return Object.assign({}, state, {
                language:action.language
            });
		default:
			return state
	}
}
