import { useParams } from "react-router-dom"
import styled from "styled-components";

const Home = () => {
    const { textColor, bgColor } = useParams();

    const H1 = styled.h1`
        color: ${textColor ? textColor : "black"};
        background-color: ${bgColor ? bgColor : "white"};
        text-align: center;
        padding: 12px 0;
    `;

    return (
        <H1>Welcome</H1>
    )
}

export default Home