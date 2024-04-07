import styled from 'styled-components';

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
`;

const StyledLabel = styled.label`
	font-size: 1rem;
`;

const StyledInput = styled.input`
	width: 100%;
	padding: 0.8rem;
	border-radius: 8px;
	border: 1px solid #dfdee0;
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
