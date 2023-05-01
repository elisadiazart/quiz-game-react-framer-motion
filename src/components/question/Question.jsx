import { StyledButton, StyledText } from "./styles"

const Question = ({text, handleClick, index}) => {
    return <StyledButton onClick={handleClick} index={index}>
        <StyledText>{text}</StyledText>
    </StyledButton>
}

export default Question