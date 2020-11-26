import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

// Imported components
import { theme } from '../utils';
import Tooltip from '../atoms/Tooltip';

const Badge = ({ fluid, objectFit, padding, content }) => {
	return (
		<Tooltip content={content}>
			<Image
				fluid={fluid}
				imgStyle={{
					objectFit: `${objectFit}`,
					padding: `${padding}`,
				}}
			/>
		</Tooltip>
	);
};

const Image = styled(Img)`
	width: 8rem;
	height: 8rem;
	margin: 1rem;
	padding: 1rem;
	box-shadow: 0 0.5rem 1rem ${theme.shadow};
	-webkit-box-shadow: 0 0.5rem 1rem ${theme.shadow};
	border-radius: 50%;
	overflow: hidden;

	@media screen and (max-width: 600px) {
		width: 4rem;
		height: 4rem;
	}

	@media screen and (min-width: 600px) and (max-width: 899px) {
		width: 6rem;
		height: 6rem;
	}
`;

export default Badge;
