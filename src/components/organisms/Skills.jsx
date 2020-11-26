import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// Imported components
import Section from '../molecules/Section';
import Container from '../atoms/Container';
import Badge from '../molecules/Badge';

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

	function findImg(i) {
		return data.allImageSharp.nodes.find((e) => {
			return e.fluid.src.split('/').pop().split('.').shift() === i;
		}).fluid;
	}
	return (
		<Section id={'skills'}>
			<Container>
				<Badge
					fluid={findImg('html5')}
					objectFit={'contain'}
					padding={'0.5rem'}
					content={'HTML'}
				/>
				<Badge
					fluid={findImg('css3')}
					objectFit={'contain'}
					padding={'0.5rem'}
					content={'CSS'}
				/>
				<Badge
					fluid={findImg('javascript')}
					objectFit={'cover'}
					padding={'0'}
					content={'JavaScript'}
				/>
				<Badge
					fluid={findImg('typescript')}
					objectFit={'cover'}
					padding={'0'}
					content={'TypeScript'}
				/>
				<Badge
					fluid={findImg('sass')}
					objectFit={'contain'}
					padding={'0.7rem'}
					content={'Sass'}
				/>
				<Badge
					fluid={findImg('tailwind')}
					objectFit={'contain'}
					padding={'0.5rem'}
					content={'Tailwind'}
				/>
				<Badge
					fluid={findImg('react')}
					objectFit={'contain'}
					padding={'0.5rem'}
					content={'React'}
				/>
				<Badge
					fluid={findImg('react-hooks')}
					objectFit={'cover'}
					padding={'0'}
					content={'React Hooks'}
				/>
				<Badge
					fluid={findImg('gatsby')}
					objectFit={'contain'}
					padding={'0'}
					content={'Gatsby'}
				/>
				<Badge
					fluid={findImg('gulp')}
					objectFit={'contain'}
					padding={'0.5rem'}
					content={'Gulp'}
				/>
				<Badge
					fluid={findImg('jamstack')}
					objectFit={'contain'}
					padding={'0.5rem'}
					content={'JAM stack'}
				/>
				<Badge
					fluid={findImg('git')}
					objectFit={'contain'}
					padding={'0.5rem'}
					content={'Git'}
				/>
				<Badge
					fluid={findImg('npm')}
					objectFit={'contain'}
					padding={'0.5rem'}
					content={'npm'}
				/>
				<Badge
					fluid={findImg('nodejs')}
					objectFit={'contain'}
					padding={'0.5rem'}
					content={'Node'}
				/>
				<Badge
					fluid={findImg('graphql')}
					objectFit={'contain'}
					padding={'0.5rem'}
					content={'GraphQL'}
				/>
				<Badge
					fluid={findImg('firebase')}
					objectFit={'contain'}
					padding={'0.5rem'}
					content={'Firebase'}
				/>
				<Badge
					fluid={findImg('contentful')}
					objectFit={'contain'}
					padding={'0.5rem 0.8rem 0.5rem 0.2rem'}
					content={'Contentful'}
				/>
				<Badge
					fluid={findImg('netlify')}
					objectFit={'contain'}
					padding={'0.5rem'}
					content={'Netlify'}
				/>
			</Container>
		</Section>
	);
};

export default Skills;
