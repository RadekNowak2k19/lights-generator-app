import { Text } from "./Text";
import { IconMinus } from "./icons/IconMinus";
import { IconAdd } from "./icons/iconAdd";
import styles from "./Counter.module.css";
import { useState } from "react";
export const Counter = props => {
	const [value, setValue] = useState(0);
	const handleIncrement = () => {
		setValue(value + 1);
	};
	const handleDecrement = () => {
		setValue(value - 1);
	};
	return (
		<div className={`${styles.wrapper} ${styles.nav}`}>
			<Text>
				{value} {props.text}
			</Text>
			<nav>
				<IconAdd onClick={handleIncrement} />
				<IconMinus onClick={handleDecrement} />
			</nav>
		</div>
	);
};
