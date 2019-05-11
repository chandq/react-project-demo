module.exports = {
    path: 'version',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./version'))
        })
    }
};