import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import { theme } from '../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
	const data = useStaticQuery(graphql`
		query Landing {
			file(relativePath: { eq: "landingBackground.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2000) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<Background fluid={data.file.childImageSharp.fluid}>
			<Section>
				<Name>Tobias Eskou</Name>
				<Heading>Front-end Web Developer</Heading>
				<P>
					Web Developer with a passion for programming, solving problems and coming up
					with creative solutions.
				</P>
				<a href='#skills'>
					<Button>
						Learn More About Me <Icon icon={faArrowDown} />
					</Button>
				</a>
			</Section>
		</Background>
	);
};

const Background = styled(BackgroundImage)`
	height: 100vh;
	padding: 0;
	background-attachment: fixed;
`;

const Section = styled.section`
	width: 100%;
	height: 100vh;
	padding: 0 3rem;
	background-color: rgba(0, 0, 0, 0.75);
	position: absolute;
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Name = styled.h1`
	color: ${theme.white};
	font-size: 2rem;
	font-weight: 400;
	padding-top: 4rem;
`;

const Heading = styled.h2`
	color: ${theme.red};
	line-height: 3rem;
	font-size: 2.6rem;
	font-weight: 340;
	text-align: center;
`;

const P = styled.p`
	color: ${theme.white};
	font-size: 1.2rem;
	margin-top: 2rem;
	text-align: center;
`;

const Button = styled.button`
	color: ${theme.white};
	background-color: rgba(255, 255, 255, 0.1);
	border: 1px solid ${theme.white};
	border-radius: 7px;
	padding: 0.7rem 1rem;
	margin-top: 2rem;
	font-size: 1.2rem;
	:focus {
		outline: none;
	}
	@media screen and (max-width: 400px) {
		margin: 2rem 0;
		font-size: 1rem;
	}
`;

const Icon = styled(FontAwesomeIcon)`
	margin-left: 0.5rem;
`;

export default Landing;
