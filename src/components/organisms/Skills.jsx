import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// Imported components
import Section from '../molecules/Section';
import Container from '../atoms/Container';
import Badge from '../atoms/Badge';

const Skills = () => {
	const data = useStaticQuery(graphql`
		query Skills {
			allImageSharp {
				nodes {
					fluid(maxWidth: 128) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<Section id={'skills'}>
			<Container>
				<Badge
					fluid={data.allImageSharp.nodes[8].fluid}
					objectFit={'contain'}
					padding={'0.5rem'}
				/>
				<Badge
					fluid={data.allImageSharp.nodes[0].fluid}
					objectFit={'contain'}
					padding={'0.5rem'}
				/>
				<Badge
					fluid={data.allImageSharp.nodes[12].fluid}
					objectFit={'cover'}
					padding={'0'}
				/>
				<Badge
					fluid={data.allImageSharp.nodes[9].fluid}
					objectFit={'cover'}
					padding={'0'}
				/>
				<Badge
					fluid={data.allImageSharp.nodes[15].fluid}
					objectFit={'contain'}
					padding={'0.7rem'}
				/>
				<Badge
					fluid={data.allImageSharp.nodes[16].fluid}
					objectFit={'contain'}
					padding={'0.5rem'}
				/>
				<Badge
					fluid={data.allImageSharp.nodes[14].fluid}
					objectFit={'contain'}
					padding={'0.5rem'}
				/>
				<Badge
					fluid={data.allImageSharp.nodes[17].fluid}
					objectFit={'cover'}
					padding={'0'}
				/>
				<Badge
					fluid={data.allImageSharp.nodes[3].fluid}
					objectFit={'contain'}
					padding={'0'}
				/>
				<Badge
					fluid={data.allImageSharp.nodes[4].fluid}
					objectFit={'contain'}
					padding={'0.5rem'}
				/>
				<Badge
					fluid={data.allImageSharp.nodes[10].fluid}
					objectFit={'contain'}
					padding={'0.5rem'}
				/>
				<Badge
					fluid={data.allImageSharp.nodes[6].fluid}
					objectFit={'contain'}
					padding={'0.5rem'}
				/>
				<Badge
					fluid={data.allImageSharp.nodes[13].fluid}
					objectFit={'contain'}
					padding={'0.5rem'}
				/>
				<Badge
					fluid={data.allImageSharp.nodes[7].fluid}
					objectFit={'contain'}
					padding={'0.5rem'}
				/>
				<Badge
					fluid={data.allImageSharp.nodes[5].fluid}
					objectFit={'contain'}
					padding={'0.5rem'}
				/>
				<Badge
					fluid={data.allImageSharp.nodes[2].fluid}
					objectFit={'contain'}
					padding={'0.5rem'}
				/>
				<Badge
					fluid={data.allImageSharp.nodes[1].fluid}
					objectFit={'contain'}
					padding={'0.5rem 0.8rem 0.5rem 0.2rem'}
				/>
				<Badge
					fluid={data.allImageSharp.nodes[11].fluid}
					objectFit={'contain'}
					padding={'0.5rem'}
				/>
			</Container>
		</Section>
	);
};

export default Skills;
