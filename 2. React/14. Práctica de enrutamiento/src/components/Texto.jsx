import { useParams } from "react-router-dom"
import styled from "styled-components";

const Texto = () => {
    const {text} = useParams();
    const H1 = styled.h1`
        text-align: center;
    `;
    return (
        <>
            {isNaN(text) ? <H1>The Word is: {text}</H1> : <H1>The number is: {text}</H1> }
        </>
    )
}

export default Texto