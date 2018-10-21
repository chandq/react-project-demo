module.exports = {
	path: 'iaas',
    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
            	require('./computer'),
            	require('./storage')
            ])
        })
    },
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/iaasPortal'))
		}, 'iaas')
	}
}

