import { useState } from "react"
import Datos from "./Datos";
import './Formulario.css'

const Formulario = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        // Contenedor de formulario
        <form>
            {/* First Name */}
            <div className="container">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)}/>
            </div>

            {/* Last Name */}
            <div className="container">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)}/>
            </div>

            {/* Email */}
            <div className="container">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>

            {/* Password */}
            <div className="container"> 
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>

            {/* Confirm Password */}
            <div className="container"> 
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
            </div>

            {/* Llamamos al componente de datos */}
            <Datos 
                firstName={firstName} 
                lastName={lastName} 
                password={password} 
                confirmPassword={confirmPassword} 
                email={email}
            />
        </form>
    )
}

export default Formulario