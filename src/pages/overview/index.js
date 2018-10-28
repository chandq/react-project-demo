module.exports = {
	path: 'overview',
    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
            ])
        })
    },
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/dataMap'))
		}, 'overview')
	}
}

