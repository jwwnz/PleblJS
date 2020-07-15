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
			stepTitle: "Title 1",
			stepContent: "content content",
		},
		{
			stepTitle: "Title 2",
			stepContent: "content content",
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

const cardStyle = {
	position: "absolute",
	border: "1px solid black",
};

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
								<Card.Title>
									{selection.content && selection.content.description}
								</Card.Title>
								<Card.Text style={{ position: "relative" }}>
									{selection.content &&
										selection.content.steps.map((step, index) => {
											return (
												<div
													style={{
														// position: "absolute",
														border: "1px solid black",
													}}
												>
													<h3>{`Step # ${index + 1} ${step.stepTitle}`}</h3>
													<div>{step.stepContent}</div>
												</div>
											);
										})}
								</Card.Text>
								<div style={{ position: "relative" }}>
									{selection.content &&
										selection.content.steps.map((step, index) => {
											return (
												<span
													style={{
														borderLeft: "solid black 1px",
														borderRight: "solid black 1px",
														width: "50px",
														height: "50px",
														padding: "5px",
													}}
												>
													<a href={`#${index}`}>{index + 1}</a>
												</span>
											);
										})}
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
