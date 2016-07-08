module.exports={
    path: 'apple',
    getComponents(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../../../components/Apple')['default'])
        },'apple')
    }
}
