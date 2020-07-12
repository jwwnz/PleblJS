import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Select, { ValueType } from "react-select";
import "./HomePage.css";

const options = [
	{ value: "Conveyancing", label: "Conveyancing (Property)" },
	{ value: "Litigation", label: "Litigation" },
];

const ExperimentPage = ({ initialSelection = options[1] }) => {
	const [selection, setSelection] = useState(initialSelection);

	return (
		<>
			<Container>
				<div>What legal area do you need information?</div>
				<Select
					options={options}
					onChange={(selectedOption) => {
						if (Array.isArray(selectedOption)) {
							throw new Error(
								"Unexpected type passed to ReactSelect onChange handler"
							);
						}

						const value = selectedOption && selectedOption.value;

						if (selectedOption) {
							setSelection(selectedOption.value);
							// console.log(value);
						}
					}}
				/>
			</Container>
		</>
	);
};

export default ExperimentPage;
