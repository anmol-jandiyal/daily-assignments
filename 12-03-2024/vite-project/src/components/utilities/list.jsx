function List(props) {
	const { list, listStyle } = props;
	return (
		<ul>
			{list.map((ele, index) => {
				return (
					<li key={index} style={{ listStyle: listStyle ?? "none" }}>
						{ele}
					</li>
				);
			})}
		</ul>
	);
}

export default List;
