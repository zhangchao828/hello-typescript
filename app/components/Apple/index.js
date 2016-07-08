import React,{Component} from 'react'
import styles from './style.css'
export default class extends Component{
    render(){
        return(
            <div className={styles.container}>
                <h1>要站在就巨人的肩膀上</h1>
                <ul>
                    <ol>
                        <h2>React最佳实践:</h2>
                        <a target="_blank" href="http://www.tuicool.com/articles/jiQnuqj">http://www.tuicool.com/articles/jiQnuqj</a>
                    </ol>
                    <ol>
                        <h2>ES6/7:</h2>
                        <a target="_blank" href="http://es6.ruanyifeng.com/#docs/intro">http://es6.ruanyifeng.com/#docs/intro</a>
                    </ol>
                    <ol>
                        <h2>Redux:</h2>
                        <a target="_blank" href=" https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options"> https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options</a>
                    </ol>
                    <ol>
                        <h2>webpack:</h2>
                        <a target="_blank" href="https://zhuanlan.zhihu.com/p/20914387?refer=jscss">https://zhuanlan.zhihu.com/p/20914387?refer=jscss</a>
                    </ol>
                </ul>
            </div>
        )
    }
}