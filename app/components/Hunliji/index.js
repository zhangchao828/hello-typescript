import React,{PropTypes,Component} from 'react'
import { Menu, Icon } from 'antd'
import {Link,browserHistory} from 'react-router'
import styles from './style.css'
const SubMenu = Menu.SubMenu
export default class extends Component{
    state={
        selected:location.pathname
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            selected: nextProps.location.pathname
        })
    }
    render(){
        let selected=this.state.selected
        let current=selected.substring(selected.lastIndexOf('/'))
        return(
            <div className={styles.container}>
                <div className={styles.menu}>
                    <Menu theme='dark'
                          style={{ width: '100%',height:'100%' }}
                          defaultOpenKeys={['sub1']}
                          selectedKeys={[current]}
                          mode="inline"
                    >
                        <Menu.Item key="/hunliji">
                            <Link to="/hunliji">
                                <Icon type="team" />Home
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/android">
                            <Link to="/hunliji/android">
                                <Icon type="android" />安卓
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/apple">
                            <Link to="/hunliji/apple">
                                <Icon type="apple" />苹果
                            </Link>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
                            <Menu.Item key="3">子选项1</Menu.Item>
                            <Menu.Item key="4">子选项2</Menu.Item>
                            <Menu.Item key="5">子选项3</Menu.Item>
                            <Menu.Item key="6">子选项4</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="windows">
                            <Icon type="windows" />windows
                        </Menu.Item>
                        <Menu.Item key="github">
                            <Icon type="github" />github
                        </Menu.Item>
                    </Menu>
                </div>
                <div className={styles.body}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}