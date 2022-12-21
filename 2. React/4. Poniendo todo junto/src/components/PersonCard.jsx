import { useState } from "react";
import "./PersonCard.css"

const PersonCard = (props) => {
    const { firstName, lastName, hairColor} = props;
    let [age, setAge] = useState(props.age)

    const aumentarEdad = () => {
        setAge(age + 1);
    }
    
    return (
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={aumentarEdad}>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard