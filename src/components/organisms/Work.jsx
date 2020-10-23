import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Imported components
import { theme } from '../utils';
import Container from '../atoms/Container';
import Section from '../molecules/Section';
import Article from '../atoms/Article';

const Work = () => {
	const data = useStaticQuery(graphql`
		query Work {
			file(relativePath: { eq: "landingBackground.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<Section id={'work'}>
			<Container>
				<Article>
					<Image fluid={data.file.childImageSharp.fluid} />
					<ContentContainer>
						<div>
							<h3>Web Developer Portfolio</h3>
							<P>
								A static web page to showcase my skills and projects. <br />
								Made in Gatsby, with styled-components and Atomic design.
							</P>
						</div>
						<BtnContainer>
							<BtnLeft href='https://github.com/Tobias-E/Portfolio'>
								Source Code
							</BtnLeft>
							<BtnRight href='https://google.com'>View Website</BtnRight>
						</BtnContainer>
					</ContentContainer>
				</Article>
				<Article>
					<Image fluid={data.file.childImageSharp.fluid} />
					<ContentContainer>
						<div>
							<h3>Upcoming...</h3>
						</div>
					</ContentContainer>
				</Article>
			</Container>
		</Section>
	);
};

const Image = styled(Img)`
	min-height: 4rem;
`;

const ContentContainer = styled.div`
	height: 100%;
	padding: 2.5rem 1rem;
	display: flex;
	flex-direction: column;
	align-items: space-between;
	justify-content: space-between;
`;

const P = styled.p`
	display: -webkit-box;
	-webkit-line-clamp: 10;
	-webkit-box-orient: vertical;
	overflow: hidden;
	letter-spacing: 0.2px;
`;

const BtnContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const Btn = styled.a`
	width: 45%;
	padding: 0.5rem 0.8rem;
	color: ${theme.white};
	border: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	:focus {
		outline: none;
		background-color: ${theme.blueFocus};
	}
`;

const BtnLeft = styled(Btn)`
	background-color: ${theme.blue};
	border-radius: 10px 0 0 10px;
`;

const BtnRight = styled(Btn)`
	background-color: ${theme.blue2};
	border-radius: 0 10px 10px 0;
`;

export default Work;
