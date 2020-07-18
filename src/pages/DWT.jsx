import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./HomePage.css";

const DWTPage = () => {
	const [price, setPrice] = useState(0);
	const [hours, setHours] = useState(0);
	const [time, setTime] = useState("week");

	const handlePriceChange = (event) => {
		setPrice(event.target.value);
	};

	const handleTimeChange = (event) => {
		setTime(event.target.value);
	};

	const handleHoursChange = (event) => {
		setHours(event.target.value);
	};

	const handleReset = (event) => {
		setPrice(0);
		setHours(0);
	};
	return (
		<>
			<Container style={{ margin: "10px" }}>
				<h2>So you wanna waste time?</h2>
				<Form>
					<Form.Group controlId="formPrice">
						<Form.Label>What do you pay?</Form.Label>
						<Form.Control
							type="number"
							placeholder="$"
							onChange={handlePriceChange}
						/>
						<Form.Text className="text-muted">
							Lets get to the truth shall we...
						</Form.Text>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlSelect2">
						<Form.Label>How frequently do you pay?</Form.Label>
						<Form.Control as="select" onChange={handleTimeChange}>
							<option>week</option>
							<option>month</option>
						</Form.Control>
					</Form.Group>

					<Form.Group controlId="formHours">
						<Form.Label>
							How many hours did you use this product/service this week?
						</Form.Label>
						<Form.Control
							type="number"
							placeholder="Hours per week"
							onChange={handleHoursChange}
						/>
						<Form.Text className="text-muted">Be honest</Form.Text>
					</Form.Group>
					<Button variant="success" type="reset" onClick={handleReset}>
						Reset
					</Button>
				</Form>

				<hr />
				{price > 0 && hours > 0 && (
					<div>
						You paid ${price} per {time}, for {hours} hours, which means the
						rate you are paying is&nbsp;
						<strong>
							${(time === "week" ? price : price / 4) / hours} per hour
						</strong>
					</div>
				)}
			</Container>
		</>
	);
};

export default DWTPage;
