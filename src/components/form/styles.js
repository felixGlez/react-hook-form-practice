import styled from 'styled-components';
import { FONTS } from '../../styles/fonts';

const StyledForm = styled.form`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3rem;
`;

const StyledInputContainer = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const StyledLabel = styled.label`
	font-family: ${FONTS.$primary};
	font-size: 0.75rem;
	color: #21092f;
	font-weight: 500;
	letter-spacing: 2px;
`;

const StyledInput = styled.input`
	width: 100%;
	padding: 0.8rem;
	border-radius: 8px;
	border: 1px solid #dfdee0;
	font-family: ${FONTS.$primary};
	font-size: 1.125rem;
	color: #21092f;
	font-weight: 500;

	&::placeholder {
		color: rgba(33, 9, 47, 25%);
	}
`;

// EXP.DATE & CVC
const StyledInlineInputsContainer = styled.div`
	width: 80%;
	display: flex;
	gap: 10px;
`;

const StyledHalfInputsContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const StyledSmallInputsContainer = styled.div`
	display: flex;
	gap: 10px;
`;

export {
	StyledForm,
	StyledInputContainer,
	StyledInput,
	StyledLabel,
	StyledInlineInputsContainer,
	StyledHalfInputsContainer,
	StyledSmallInputsContainer
};
