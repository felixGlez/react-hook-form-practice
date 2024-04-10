import styled from 'styled-components';
import { FONTS } from '../../styles/fonts';

const StyledCardsContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;

const StyledFrontCard = styled.div`
	width: 447px;
	height: 245px;
	display: flex;
	flex-direction: column;
	padding: 1.875rem;
	background-image: url('./images/bg-card-front.png');
	box-shadow: 20px 20px 50px 0px #00000036;
	border-radius: 10px;
`;

const StyledIcon = styled.img`
	width: 84px;
	margin-bottom: 15%;
`;

const StyledCardNumber = styled.span`
	font-family: ${FONTS.$primary};
	font-size: 1.75rem;
	color: white;
	margin-bottom: 5%;
`;

const StyledFooterCardContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const StyledCardName = styled.span`
	font-family: ${FONTS.$primary};
	font-size: 0.875rem;
	color: white;
`;

const StyledCardDate = styled.span`
	font-family: ${FONTS.$primary};
	font-size: 0.875rem;
	color: white;
`;

const StyledBackCard = styled.div`
	width: 447px;
	height: 245px;
	display: flex;
	flex-direction: column;
	padding: 1.875rem;
	background-image: url('./images/bg-card-back.png');
	box-shadow: 20px 20px 50px 0px #00000036;
	margin-left: 10rem;
	border-radius: 10px;
`;

export {
	StyledCardsContainer,
	StyledFrontCard,
	StyledIcon,
	StyledCardNumber,
	StyledCardName,
	StyledFooterCardContainer,
	StyledCardDate,
	StyledBackCard
};
