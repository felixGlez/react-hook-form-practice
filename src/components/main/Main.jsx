import { useState } from 'react';
import Cards from '../cards/Cards';
import Form from '../form/Form';
import { StyledBackground, StyledMainContainer } from './styles';

const Main = () => {
	const [formValues, setFormValues] = useState({
		name: '',
		number: ''
	});
	console.log(formValues);

	return (
		<StyledMainContainer>
			<StyledBackground />
			<Cards formValues={formValues} setFormValues={setFormValues} />
			<Form formValues={formValues} setFormValues={setFormValues} />
		</StyledMainContainer>
	);
};

export default Main;
