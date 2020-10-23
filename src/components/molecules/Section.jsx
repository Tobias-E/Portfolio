import React from 'react';
import styled from 'styled-components';

import Heading from '../atoms/SectionH2';

const Section = ({ children, id }) => {
	return (
		<StyledSection id={id}>
			<Heading>{id}</Heading>
			{children}
		</StyledSection>
	);
};

const StyledSection = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 2rem 0 5rem 0;
	padding: 2rem 5vw;
	@media screen and(max-width: 899px) {
		margin: 2rem 0 3rem 0;
	}
`;

export default Section;
