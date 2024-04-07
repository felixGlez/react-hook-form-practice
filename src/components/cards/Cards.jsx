import {
	StyledFrontCard,
	StyledCardsContainer,
	StyledIcon,
	StyledCardNumber
} from './styles';

const Cards = ({ formValues, setFormValues }) => {
	return (
		<StyledCardsContainer>
			<StyledFrontCard>
				<StyledIcon src='./images/card-logo.svg' />
				<StyledCardNumber>
					{formValues.name ? formValues.name : '0000 0000 0000 0000'}
				</StyledCardNumber>
			</StyledFrontCard>
			<StyledFrontCard />
		</StyledCardsContainer>
	);
};

export default Cards;
