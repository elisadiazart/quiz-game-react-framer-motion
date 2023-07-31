import {  useState } from 'react';
import { QUESTIONS } from '../../constants/questions';
import Question from '../question/Question';
import { v4 } from 'uuid';
import { StyledQuestions, StyledMain } from './styles';

const Questions = () => {
	const [currentQuestion] = useState(0);


	return (
		<StyledMain>
			<h2>{QUESTIONS[currentQuestion].question}</h2>
			<StyledQuestions 
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1 }}>
				{QUESTIONS[currentQuestion].options.map((answer, index) => (
					<Question
						key={v4()}
						text={answer}
						index={index}
					/>
				))}
			</StyledQuestions>
		</StyledMain>
	);
};



export default Questions;
