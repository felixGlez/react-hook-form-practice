import {
	StyledFrontCard,
	StyledCardsContainer,
	StyledIcon,
	StyledCardNumber,
	StyledCardName,
	StyledFooterCardContainer,
	StyledCardDate
} from './styles';

const Cards = ({ formValues }) => {
	return (
		<StyledCardsContainer>
			<StyledFrontCard>
				<StyledIcon src='./images/card-logo.svg' />
				<StyledCardNumber>
					{formValues.cardNumber
						? formatCreditNumber(formValues)
						: '0000 0000 0000 0000'}
				</StyledCardNumber>
				<StyledFooterCardContainer>
					<StyledCardName>
						{formValues.name ? formValues.name.toUpperCase() : 'JANE APPLESED'}
					</StyledCardName>
					<StyledCardDate>
						{formValues.mm ? formValues.mm : '00'}
						<StyledCardDate>/</StyledCardDate>
						<StyledCardDate>
							{formValues.yy ? formValues.yy : '00'}
						</StyledCardDate>
					</StyledCardDate>
				</StyledFooterCardContainer>
			</StyledFrontCard>
			<StyledFrontCard />
		</StyledCardsContainer>
	);
};

const formatCreditNumber = formValues => {
	return formValues.cardNumber.replace(/(\d{4})/g, '$1 ').trim();
};

export default Cards;
