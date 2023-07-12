import "./App.css";
import { Counter } from "./components/Counter";
import { Text } from "./components/Text";
function App() {
	return (
		<div>
			<nav className="nav">
				<Text>0 bulbs</Text>
				<Counter text="rows" />
				<Counter text="columns" />
			</nav>
		</div>
	);
}

export default App;
