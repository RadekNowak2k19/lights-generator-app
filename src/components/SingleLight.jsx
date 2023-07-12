import { useState } from "react";
import LightTurnedOff from "../../public/images/light-turned-off.svg";
import LightBlue from "../../public/images/light-blue.svg";

export const SingleLight = () => {
	const [isOn, setOn] = useState(true);
	const handleToggle = () => {
		setOn(!isOn);
	};
	const imageSrc = isOn ? LightBlue : LightTurnedOff;
	return <img onClick={handleToggle} src={imageSrc} alt="Single light" />;
};
