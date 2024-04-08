import { useState } from 'react';
import Cards from '../cards/Cards';
import Form from '../form/Form';
import { StyledBackground, StyledMainContainer } from './styles';

const Main = () => {
	const [formValues, setFormValues] = useState({
		name: '',
		cardNumber: '',
		mm: '',
		yy: '',
		cvc: ''
	});
	// console.log(formValues);

	return (
		<StyledMainContainer>
			<StyledBackground />
			<Cards formValues={formValues} />
			<Form formValues={formValues} setFormValues={setFormValues} />
		</StyledMainContainer>
	);
};

export default Main;
