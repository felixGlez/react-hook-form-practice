import {
	StyledButton,
	StyledForm,
	StyledHalfInputsContainer,
	StyledInlineInputsContainer,
	StyledInput,
	StyledInputContainer,
	StyledLabel,
	StyledSmallInputsContainer
} from './styles';

const Form = ({ handleSubmit, register, errors }) => {
	return (
		<StyledForm onSubmit={handleSubmit(formSubmit)}>
			<StyledInputContainer>
				<StyledLabel htmlFor='name'>CARDHOLDER NAME</StyledLabel>
				<StyledInput
					id='name'
					name='name'
					placeholder='e.g. Jane Appleseed'
					maxLength={25}
					{...register('name', {
						required: "Can't be blank",
						pattern: {
							value: /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,
							message: 'Name is not valid'
						}
					})}
					// onChange={event => saveValues(event, formValues, setFormValues)}
				/>
				<span>{errors?.name?.message}</span>
			</StyledInputContainer>
			<StyledInputContainer>
				<StyledLabel htmlFor='cardNumber'>CARD NUMBER</StyledLabel>
				<StyledInput
					id='cardNumber'
					name='cardNumber'
					placeholder='e.g. 1234 5678 9123 0000'
					maxLength={16}
					{...register('cardNumber', {
						required: "Can't be blank",
						pattern: {
							value: /^[0-9]+$/,
							message: 'Wrong format, numbers only'
						}
					})}
					// onChange={event => saveValues(event, formValues, setFormValues)}
				/>
				<span>{errors?.cardNumber?.message}</span>
			</StyledInputContainer>
			<StyledInlineInputsContainer>
				<StyledHalfInputsContainer>
					<StyledLabel htmlFor='mm'>EXP. DATE (MM/YY)</StyledLabel>
					<StyledSmallInputsContainer>
						<StyledInput
							id='mm'
							name='mm'
							placeholder='MM'
							maxLength={2}
							{...register('mm', {
								required: "Can't be blank",
								pattern: {
									value: /^[0-9]+$/,
									message: 'Wrong format, numbers only'
								}
							})}
							// onChange={event => saveValues(event, formValues, setFormValues)}
						/>
						<span>{errors?.mm?.message}</span>
						<StyledInput
							id='yy'
							name='yy'
							placeholder='YY'
							maxLength={2}
							{...register('yy', {
								required: "Can't be blank",
								pattern: {
									value: /^[0-9]+$/,
									message: 'Wrong format, numbers only'
								}
							})}
							// onChange={event => saveValues(event, formValues, setFormValues)}
						/>
						<span>{errors?.yy?.message}</span>
					</StyledSmallInputsContainer>
				</StyledHalfInputsContainer>
				<StyledHalfInputsContainer>
					<StyledLabel htmlFor='cvc'>CVC</StyledLabel>
					<StyledInput
						id='cvc'
						name='cvc'
						placeholder='e.g. 123'
						maxLength={3}
						{...register('cvc', {
							required: "Can't be blank",
							pattern: {
								value: /^[0-9]+$/,
								message: 'Wrong format, numbers only'
							}
						})}
						// onChange={event => saveValues(event, formValues, setFormValues)}
					/>
					<span>{errors?.cvc?.message}</span>
				</StyledHalfInputsContainer>
			</StyledInlineInputsContainer>
			<StyledInputContainer>
				<StyledButton type='submit' value='Enviar' />
			</StyledInputContainer>
		</StyledForm>
	);
};

// const saveValues = (event, formValues, setFormValues) => {
// 	const { name, value } = event.target;
// 	setFormValues({ ...formValues, [name]: value });
// };

const formSubmit = () => {};

export default Form;
