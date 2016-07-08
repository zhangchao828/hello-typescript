interface Props {
	from: string;
	message: string;
}

class Greeting extends React.Component<Props,any> {
	render () {
		const {greet} = this.props;
		return (
			<div>
				<p>来自{greet.from}的消息</p>
				<p>{greet.message}</p>
			</div>
		)
	}
}