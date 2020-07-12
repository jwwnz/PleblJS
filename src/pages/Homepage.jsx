import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./HomePage.css";
import { legalLinks } from "../test-data/test-data";

function HomePage() {
	return (
		<>
			<Container className="homePageStyle">
				<Row className="pictureRowStyle">
					<Col>
						<Image src="people.jpg" fluid />
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="quoteStyle">
							Use the law. It's yours as much as anyones.
						</div>
					</Col>
				</Row>
				<hr style={{ width: "100px" }} />
				<Row className="rowStyle">
					<Col>
						<h4>Important links</h4>
						{legalLinks
							.filter(({ category }) => category !== "Covid-19")
							.map(
								({ name, link, description, hidden }) =>
									!hidden && (
										<div className="paragraphStyle" key={name}>
											<a href={link}>{name}</a>
											<div>{description}</div>
										</div>
									)
							)}
					</Col>
				</Row>
				<Row className="rowStyle">
					<Col>
						<h4>Covid-19 Related links</h4>
						{legalLinks
							.filter(({ category }) => category === "Covid-19")
							.map(({ name, link, description, questionsAndAnswers }) => (
								<div className="paragraphStyle" key={name}>
									<a href={link}>{name}</a>
									<div>{description}</div>
									{questionsAndAnswers && (
										<div>
											<hr />
											<div
												style={{
													fontWeight: "bold",
													padding: "0 0 1rem 0",
												}}
											>
												Questions and answers
											</div>
											{questionsAndAnswers.map(
												({ question, answer, sources }) => (
													<div className="questionAnswerStyle" key={question}>
														<div style={{ fontStyle: "italic" }}>
															"{question}"
														</div>
														<br />
														<div>{answer}</div>
														<br />

														{sources &&
															sources.map(({ name, link }) => (
																<Button
																	variant="primary"
																	href={link}
																	style={{ margin: "2px" }}
																	key={name}
																>
																	{name}
																</Button>
															))}
													</div>
												)
											)}
										</div>
									)}
								</div>
							))}
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default HomePage;
