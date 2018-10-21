/**
 * author: chendq
 * Date: 2018/10/9
 * Features:
 */
module.exports = {
	path: 'storage',
	getChildRoutes(partialNextState, cb) {
		require.ensure([], (require) => {
			cb(null, [
			])
		})
	},
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/storage'))
		}, 'components')
	}
}
