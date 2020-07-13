import React, { useState } from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import { BsFillCaretDownFill } from "react-icons/bs";
import Select from "react-select";
import "./HomePage.css";

const conveyancingInformation = {
	title: "conveyancingTitle",
	description: "conveyancing ",
	steps: [
		{
			stepTitle: "hello1",
		},
		{
			stepTitle: "hello2",
		},
	],
};

const options = [
	{
		value: "Conveyancing",
		label: "Conveyancing (Property)",
		content: conveyancingInformation,
	},
	{ value: "Litigation", label: "Litigation" },
];

const ExperimentPage = ({ initialSelection = {} }) => {
	const [selection, setSelection] = useState(initialSelection);

	return (
		<>
			<Container>
				<div>What legal area do you need information?</div>
				<Select
					options={options}
					onChange={(selectedOption) => {
						if (selectedOption) {
							setSelection(selectedOption);
							console.log(selectedOption.value);
						}
					}}
				/>
				<h1>{selection.label}</h1>
				<Accordion defaultActiveKey="0">
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="0">
							<span>Process</span>
							<BsFillCaretDownFill />
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								<div>{selection.content && selection.content.description}</div>
								<div>Herere</div>
								<div>Herere</div>
								<div>
									{selection.content &&
										`There are ${selection.content.steps.length} steps`}
								</div>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="1">
							Resources
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="1">
							<Card.Body>Hello! I'm another body</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</Container>
		</>
	);
};

export default ExperimentPage;
