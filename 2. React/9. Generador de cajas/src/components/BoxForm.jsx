import { useState } from "react";

const BoxForm = (props) => {
    const [color, setColor] = useState('');

    const sendForm = (e) => {
        e.preventDefault();
        props.addBox(color);
        setColor('');
    }

    const inputStyle = {
        margin: '10px',
        padding: '8px',
        fontSize: '24px'
    }

    const submitStyle = {
        margin: '10px',
        padding: '8px 12px',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '5px',
        fontSize: '24px'
    }

    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <form onSubmit={sendForm}>
                <label style={{fontSize:'32px'}} >Color </label>
                <input style={inputStyle} type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                <input type="submit" value="Enviar" style={submitStyle}/>
            </form>
        </div>
    )
}

export default BoxForm