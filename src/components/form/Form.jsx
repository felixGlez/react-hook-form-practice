import {
	StyledForm,
	StyledHalfInputsContainer,
	StyledInlineInputsContainer,
	StyledInput,
	StyledInputContainer,
	StyledLabel,
	StyledSmallInputsContainer
} from './styles';

const Form = ({ formValues, setFormValues }) => {
	return (
		<StyledForm>
			<StyledInputContainer>
				<StyledLabel htmlFor='name'>CARDHOLDER NAME</StyledLabel>
				<StyledInput
					id='name'
					onChange={event => saveValues(event, formValues, setFormValues)}
				/>
			</StyledInputContainer>
			<StyledInputContainer>
				<StyledLabel htmlFor='card-number'>CARD NUMBER</StyledLabel>
				<StyledInput id='card-number' />
			</StyledInputContainer>
			<StyledInlineInputsContainer>
				<StyledHalfInputsContainer>
					<StyledLabel htmlFor='date'>EXP. DATE (MM/YY)</StyledLabel>
					<StyledSmallInputsContainer>
						<StyledInput id='date' />
						<StyledInput />
					</StyledSmallInputsContainer>
				</StyledHalfInputsContainer>
				<StyledHalfInputsContainer>
					<StyledLabel htmlFor='date'>CVC</StyledLabel>

					<StyledInput />
				</StyledHalfInputsContainer>
			</StyledInlineInputsContainer>
		</StyledForm>
	);
};

const saveValues = (event, formValues, setFormValues) => {
	const value = event.target.value;
	setFormValues({ ...formValues, name: value });
};

export default Form;
