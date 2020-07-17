import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./HomePage.css";

const DWTPage = () => {
	const [price, setPrice] = useState(0);
	const [hours, setHours] = useState(0);

	const handlePriceChange = (event) => {
		setPrice(event.target.value);
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
						<Form.Label>What did you pay per week</Form.Label>
						<Form.Control
							type="number"
							placeholder="$ per week"
							onChange={handlePriceChange}
						/>
						<Form.Text className="text-muted">
							Lets get to the truth shall we...
						</Form.Text>
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
						You paid ${price}, for {hours} hours, which means the rate you are
						paying is&nbsp;
						<strong>${price / hours} per hour</strong>
					</div>
				)}
			</Container>
		</>
	);
};

export default DWTPage;
