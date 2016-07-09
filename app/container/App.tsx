import * as React from "react"
interface HelloProps {
    compiler: string; 
    framework: string; 
}
export class App extends React.Component<HelloProps, {}> {
    render() {
        return(
            <h1>
                Hello {this.props.compiler} and {this.props.framework}!
            </h1>
        )
    }
}