module.exports={
	path: 'android',
	getComponents(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('../../../components/Android')['default'])
		},'android')
	}
}
