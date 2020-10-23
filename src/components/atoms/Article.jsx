import React from 'react';
import styled from 'styled-components';

// Imported Components
import { theme } from '../utils';

const Article = ({ children }) => {
	return <StyledArticle>{children}</StyledArticle>;
};

const StyledArticle = styled.article`
	display: flex;
	flex-direction: column;
	width: 25vw;
	height: 35rem;
	margin: 1.5rem;
	border: 1px solid ${theme.grey};
	border-radius: 10px;
	box-shadow: 0 0.5rem 1rem ${theme.shadow};
	transition: all 0.2s;
	overflow: hidden;
	:hover {
		transform: scale(1.05);
	}
	@media screen and (max-width: 900px) {
		width: 80vw;
		min-height: 65vh;
		:hover {
			transform: scale(1);
		}
	}
`;

export default Article;
