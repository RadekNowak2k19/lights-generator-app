import "./App.css";
import { Counter } from "./components/Counter";
import { Text } from "./components/Text";
import { SingleLight } from "./components/SingleLight";
import { useState } from "react";
import { Grid } from "./components/Grid";
function App() {
	const [rows, setRows] = useState(0);
	const [columns, setColumns] = useState(0);
	const handleIncrementRow = () => {
		setRows(rows + 1);
	};
	const handleDecrementRow = () => {
		if (rows <= 0) return;
		setRows(rows - 1);
	};

	const handleIncrementCoumns = () => {
		if (columns >= 9) return;
		setColumns(columns + 1);
	};
	const handleDecrementCoumns = () => {
		if (columns <= 0) return;
		setColumns(columns - 1);
	};

	const totalLight = rows * columns;
	const lights = Array.from({ length: totalLight });

	return (
		<div>
			<nav className="nav">
				<Text>{totalLight} bulbs</Text>
				<Counter
					text="rows"
					count={rows}
					onIncrement={handleIncrementRow}
					onDecrement={handleDecrementRow}
				/>
				<Counter
					text="columns"
					count={columns}
					onIncrement={handleIncrementCoumns}
					onDecrement={handleDecrementCoumns}
				/>
			</nav>
			<Grid columns={columns}>
				{lights.map((value, index) => {
					return <SingleLight key={index} />;
				})}
			</Grid>
		</div>
	);
}

export default App;
