import { StyledButton, StyledText } from './styles';

const Question = ({ text, handleClick, index }) => {
	return (
		<StyledButton onClick={handleClick} index={index}
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1, delay: index - 0.2 }}
		>
			<StyledText>{text}</StyledText>
		</StyledButton>
	);
};

export default Question;
