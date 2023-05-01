import { motion } from "framer-motion";
import styled from "styled-components";

const StyledButton = styled(motion.button)`
    padding: .5rem 1.5rem;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    border: none;
    border-radius: 18px;
    border: 1px solid lightgray;
    background: #f7f7f7;
    box-shadow:  13px 13px 29px #cccccf,
                -13px -13px 29px #ffffff;
    cursor: pointer;
`

const StyledText = styled.h3`
    font-weight: 400;
    opacity: .7;
    
`

export {StyledButton, StyledText}