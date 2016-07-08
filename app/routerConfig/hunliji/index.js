import Home from '../../components/Home'
module.exports={
    path: 'hunliji',
    getComponents(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../../components/Hunliji')['default'])
        },'hunliji')
    },
    indexRoute:{
        component:Home
    },
    childRoutes:[
        require('./apple'),
        require('./android')
    ]
}
