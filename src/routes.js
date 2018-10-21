/**
 * Created by chendeqiao on 2018/5/22.
 */
module.exports = {
	path: 'navroute',
	getChildRoutes(partialNextState, cb) {
		require.ensure([], (require) => {
			cb(null, [
				require('./pages/iaas'),
			])
		})
    },
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./pages/portal/components/homePage'))
		}, 'navroute')
	}
};