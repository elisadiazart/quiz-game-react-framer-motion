import { useState } from "react"
import { QUESTIONS } from "../../constants/questions"
import Question from "../question/Question"
import { v4 } from "uuid"
import { StyledQuestions, StyledMain } from "./styles"


const Questions = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [index, setIndex] = useState(0)


    return <StyledMain
            initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1.7, delay: 0.2 }}>
        <h2>{QUESTIONS[currentQuestion].question}</h2>
        <StyledQuestions>
            {QUESTIONS[currentQuestion].options.map(answer => (
                <Question key={v4()} text={answer} index={index +1} handleClick={()=> setQuestion(currentQuestion, setCurrentQuestion)}
                />
            ))}
        </StyledQuestions>
    </StyledMain>
}


const setQuestion = (currentQuestion, setCurrentQuestion) => {
    setCurrentQuestion( currentQuestion + 1)
    console.log(currentQuestion);
}

export default Questions