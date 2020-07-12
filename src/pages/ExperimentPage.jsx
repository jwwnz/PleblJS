import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Select from "react-select";
import "./HomePage.css";

const options = [
	{ value: "Conveyancing", label: "Conveyancing (Property)" },
	{ value: "Litigation", label: "Litigation" },
];

const ExperimentPage = ({ initialSelection = "" }) => {
	const [selection, setSelection] = useState(initialSelection);

	const DisplayInfo = () => {
		if (selection === "Conveyancing") {
			return <h1>Conveyancing!</h1>;
		} else if (selection === "Litigation") {
			return <h1>Litigation</h1>;
		} else {
			return <div>Select an area to get started</div>;
		}
	};

	return (
		<>
			<Container>
				<div>What legal area do you need information?</div>
				<Select
					options={options}
					onChange={(selectedOption) => {
						if (selectedOption) {
							setSelection(selectedOption.value);
							console.log(selectedOption.value);
						}
					}}
				/>
				<DisplayInfo />
			</Container>
		</>
	);
};

export default ExperimentPage;
