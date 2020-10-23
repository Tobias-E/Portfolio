import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
	return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
	padding: 2rem 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	@media screen and (min-width: 1300px) {
		padding: 2rem calc(10vw + 4rem);
	}
`;

export default Container;
