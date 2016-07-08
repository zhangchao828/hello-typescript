import React,{Component} from 'react'
import {Link,IndexLink,browserHistory} from 'react-router'
import styles from './style.css'
/*
这里(顶层路由组件)如果使用了antd的组件会导致无法热重载的情况出现原，因还不知道
*/
export default class extends Component{
    logout(){
        if(confirm('确认要退出吗?')){
            browserHistory.push({
                pathname:'/hunliji'
            })
        }
    }
    render(){
        return(
            <div className={styles.container}>
                <header className={styles.header}>
                    <nav className={styles.nav}>
                        <ul>
                            <li><Link to="/hunliji" activeClassName={styles.active}>婚礼纪</Link></li>
                        </ul>
                    </nav>
                    <div className={styles.user}>
                        <span className={styles.logout} onClick={::this.logout}>注销</span>
                    </div>
                </header>
                <div className={styles.body}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
