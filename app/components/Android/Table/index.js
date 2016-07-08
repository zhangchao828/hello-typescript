import React,{Component} from 'react'
import { Table, Button ,DatePicker } from 'antd';
import SearchInput from './SearchInput'
import columns from './columns'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../../../actions/androidAction'
import styles from './style.css'
@connect(
    state=>({android:state.android}),
    dispatch=>({actions:bindActionCreators(actionCreators,dispatch)})
)
export default class extends Component{
    componentDidMount(){
        this.search()
    }
    search(value=''){
        const actions=this.props.actions
        actions.loading(true)
        actions.search(value.trim())
    }
    handleTableChange(pagination, filters, sorter){
        const actions=this.props.actions
        actions.paging(pagination)
    }
    render(){
        const {data,loading,pagination}=this.props.android
        return(
            <div className={styles.container}>
                <div className={styles.tbar}>
                    <h2>结合redux表格搜索:</h2>
                    <div className={styles.action}>
                        <DatePicker style={{marginRight:20}}/>
                        <SearchInput placeholder="输入姓名"
                                     onSearch={::this.search} style={{ width: 200 }}
                        />
                    </div>
                </div>
                <Table
                    columns={columns}
                    dataSource={data}
                    loading={loading}
                    pagination={pagination}
                    onChange={::this.handleTableChange}
                    />
            </div>
        )
    }
}