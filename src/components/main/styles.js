import styled from 'styled-components';

const StyledMainContainer = styled.div`
	width: 100%;
	max-width: 1440px;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	margin-inline: auto;
`;

const StyledBackground = styled.div`
	width: 30%;
	height: 100vh;
	position: absolute;
	left: 0;
	background-image: url(./images/bg-main-desktop.png);
	background-size: cover;
	z-index: -1;
`;

export { StyledMainContainer, StyledBackground };
