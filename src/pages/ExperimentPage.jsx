import React, { useState } from "react";
import { Accordion, Button, Card, Carousel, Container } from "react-bootstrap";
import { BsFillCaretDownFill } from "react-icons/bs";
import Select from "react-select";
import "./HomePage.css";

const conveyancingInformation = {
	title: "conveyancingTitle",
	description: "conveyancing",
	steps: [
		{
			stepTitle: "Get pre-approval",
			stepContent: "content content",
		},
		{
			stepTitle: "Title 2",
			stepContent: "content content",
		},
		{
			stepTitle: "Title 2",
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
		id: "LAW-PROP-001",
		value: "Conveyancing",
		label: "Purchase a Residential Property",
		content: conveyancingInformation,
	},
	{ value: "Litigation", label: "Litigation" },
];

const cardStyle = {
	// position: "absolute",
	// border: "1px solid black",
	backgroundColor: "#E5E5E5",
	height: "400px",
	padding: "50px",
};

const ExperimentPage = ({ initialSelection = options[0] }) => {
	const [selection, setSelection] = useState(initialSelection);
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

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
				<hr />
				<h2 style={{ marginBottom: "20px" }}>{selection.label}</h2>
				<Accordion defaultActiveKey="0">
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="0">
							<span>Process</span>
							<BsFillCaretDownFill />
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								<Card.Text style={{ position: "relative" }}>
									<Carousel
										activeIndex={index}
										onSelect={handleSelect}
										interval={99999}
										prevIcon={null}
										nextIcon={null}
									>
										{selection.content &&
											selection.content.steps.map((step, index) => {
												return (
													<Carousel.Item>
														<div style={cardStyle}>
															<h3>{`Step # ${index + 1} ${step.stepTitle}`}</h3>
															<div>{step.stepContent}</div>
														</div>
													</Carousel.Item>
												);
											})}
									</Carousel>
								</Card.Text>
								<div
									style={
										{
											// position: "relative"
										}
									}
								>
									{selection.content &&
										selection.content.steps.map((step, index) => {
											return (
												<span
													style={{
														padding: "5px",
													}}
												>
													<Button
														variant="primary"
														onClick={() => {
															setIndex(index);
														}}
													>
														{index + 1}
													</Button>
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
