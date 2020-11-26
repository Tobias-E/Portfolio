import React, { useState } from 'react';
import styled from 'styled-components';

const Tooltip = ({ children, content }) => {
	let timeout;
	const [active, setActive] = useState(false);

	const showTip = () => {
		timeout = setTimeout(() => {
			setActive(true);
		}, 400);
	};
	const hideTip = () => {
		clearInterval(timeout);
		setActive(false);
	};

	return (
		<Wrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
			{children}
			{active && <TooltipContainer>{content}</TooltipContainer>}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	/* border: 3px solid #9020aa; */
	/* display: inline-block; */
	position: relative;
`;

const TooltipContainer = styled.p`
	position: absolute;
	border-radius: 5px;
	left: 50%;
	transform: translateX(-50%);
	padding: 6px;
	color: #fff;
	background: #000;
	font-size: 14px;
	line-height: 1;
	z-index: 100;
	white-space: nowrap;
	top: calc(30px * -1);

	::before {
		content: ' ';
		left: 50%;
		border: solid transparent;
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
		border-width: 6px;
		margin-left: calc(6px * -1);
		top: 100%;
		border-top-color: #000;
	}
`;

export default Tooltip;
