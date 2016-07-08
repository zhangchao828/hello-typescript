import React,{Component,PropTypes} from 'react'
import styles from './style.css'
/*
这种创建组件的方式只适用于纯render的组件，没有其他生命周期的操作,
不过这种方式，如果修改内容会导致页面全部刷新，不会热重载，
 */
// export default (props)=>(
//     <div className={styles.container}>
//
//     </div>
// )
export default class extends Component{
    render(){
        return(
            <div className={styles.container}>

            </div>
        )
    }
}
