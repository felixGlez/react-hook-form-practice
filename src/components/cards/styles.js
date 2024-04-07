import styled from 'styled-components';

const StyledCardsContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledFrontCard = styled.div`
	width: 447px;
	height: 245px;
	background-image: url('./images/bg-card-front.png');
`;

const StyledIcon = styled.img`
	width: 84px;
`;

const StyledCardNumber = styled.span`
	font-size: 1.75rem;
`;

export { StyledCardsContainer, StyledFrontCard, StyledIcon, StyledCardNumber };
