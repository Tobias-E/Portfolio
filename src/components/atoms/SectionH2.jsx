import React from 'react';
import styled from 'styled-components';

const Heading = ({ children }) => {
	return <StyledHeading>{children}</StyledHeading>;
};

const StyledHeading = styled.h2`
	margin: 0;
	font-size: 2.5rem;
	font-weight: 500;
	text-transform: uppercase;
`;

export default Heading;
