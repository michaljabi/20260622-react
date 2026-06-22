function Greetings({name = 'Nonename'}) {

	const [count, setCount] = React.useState(0);

	return (
		<div 
			style={{ cursor: 'pointer', textDecoration: 'underline' }} 
			onClick={() => setCount(c => c+1)}
		>
			<h2>Hello { name } {'!'.repeat(count)}</h2>
		</div>
	)
}
