import Error from '../components/Error'
import Header from '../components/Header'
export default{
    childRoutes:[{
        path:'/',
        component:Header,
        indexRoute:{
            onEnter: (nextState, replace) => replace('/hunliji')
        },
        childRoutes:[
            require('./hunliji')
        ]
    },{
        path:'*',
        component:Error
    }]
}