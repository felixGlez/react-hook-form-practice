// import { useState } from 'react';
import Cards from '../cards/Cards';
import Form from '../form/Form';
import { StyledBackground, StyledMainContainer } from './styles';
import { useForm } from 'react-hook-form';

const Main = () => {
	// Lo hice con un estado antes de saber que se podía hacer con el modo watch() que proporciona la librería. Pero es prácticamente lo mismo.
	// const [formValues, setFormValues] = useState({
	// 	name: '',
	// 	cardNumber: '',
	// 	mm: '',
	// 	yy: '',
	// 	cvc: ''
	// });
	// console.log(formValues);

	const {
		handleSubmit,
		register,
		watch,
		formState: { errors }
	} = useForm({ mode: 'onChange' });
	// console.log(errors);

	const formValues = watch();
	// console.log(formValues);

	return (
		<StyledMainContainer>
			<StyledBackground />
			<Cards formValues={formValues} />
			<Form handleSubmit={handleSubmit} register={register} errors={errors} />
		</StyledMainContainer>
	);
};

export default Main;
