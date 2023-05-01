import { motion } from "framer-motion";
import styled from "styled-components";

const StyledQuestions = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 2rem;
`

const StyledMain = styled(motion.main)`
    width: 900px;
    margin: auto;
    padding: 2rem 0;
`

export{StyledQuestions, StyledMain}