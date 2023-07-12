import { Text } from "./Text";
import { IconMinus } from "./icons/IconMinus";
import { IconAdd } from "./icons/iconAdd";
import styles from "./Counter.module.css";
export const Counter = props => {
	return (
		<div className={`${styles.wrapper} ${styles.nav}`}>
			<Text>
				{props.count} {props.text}
			</Text>
			<nav>
				<IconAdd onClick={props.onIncrement} />
				<IconMinus onClick={props.onDecrement} />
			</nav>
		</div>
	);
};
