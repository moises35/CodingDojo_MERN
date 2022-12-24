import { useState } from "react"
import './Formulario.css'

const Formulario = () => {
    const [firstName, setFirstName] = useState('');
    const [firstNameValidation, setFirstNameValidation] = useState('');

    const [lastName, setLastName] = useState('');
    const [lastNameValidation, setLastNameValidation] = useState('');

    const [password, setPassword] = useState('');
    const [passMessageValidation, setPassValidation] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [pass2MessageValidation, setPass2Validation] = useState('');

    const [email, setEmail] = useState('');
    const [emailMessageValidation, setEmailValidation] = useState('');

    // Validaciones
    const nameValidation = (e) => {
        // Verificamos cual es el campo a ser editado
        let flag = 0;
        if(e.target.id === 'firstName') {
            setFirstName(e.target.value);
            flag = 1;
        } else if (e.target.id === 'lastName') {
            setLastName(e.target.value);
            flag = 2;
        }

        let messageError = '';

        if(e.target.value === '') {
            messageError = '';
        } else if(e.target.value.length < 2) {
            messageError = 'El campo '+ (flag === 1? 'First Name':'Last Name') +' debe tener al menos 2 caracteres!!!'
        }

        if(flag === 1) {
            setFirstNameValidation(messageError);
        } else if(flag === 2) {
            setLastNameValidation(messageError);
        }
    } 

    const emailValidation = (e) => {
        setEmail(e.target.value);
        let sms = '';
        if(e.target.value === '') {
            sms = '';
        } else if(e.target.value.length < 5) {
            sms = "El campo email debe de tener al menos 5 caracteres";
        }
        setEmailValidation(sms);
    }

    const passwordValidation = (e) => {
        setPassword(e.target.value);
        let sms = '';

        if(e.target.value.length < 8) {
            sms = 'Password debe de tener al menos 8 caracteres' 
        }

        if(e.target.value === '') {
            sms = '';
        }

        setPassValidation(sms);
    }

    const passwordValidation2 = (e) => {
        setConfirmPassword(e.target.value);
        let sms = '';
        if(e.target.value !== password) {
            sms += '\nEl campo Confirm Password debe de coincidir con el campo Password'
        }
        if(e.target.value === '') {
            sms = '';
        }
        setPass2Validation(sms);
    }

    return (
        // Contenedor de formulario
        <form>
            {/* First Name */}
            <div className="container">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" value={firstName} onChange={nameValidation}/>
            </div>
            {
                firstNameValidation ? 
                <p style={{color:'red', marginTop:'-16px'}} >{firstNameValidation}</p>:
                ''
            }

            {/* Last Name */}
            <div className="container">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" value={lastName} onChange={nameValidation}/>
            </div>
            {
                lastNameValidation ? 
                <p style={{color:'red', marginTop:'-16px'}} >{lastNameValidation}</p>:
                ''
            }

            {/* Email */}
            <div className="container">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={emailValidation}/>
            </div>
            {
                emailMessageValidation ? 
                <p style={{color:'red', marginTop:'-16px'}} >{emailMessageValidation}</p>:
                ''
            }

            {/* Password */}
            <div className="container"> 
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={passwordValidation}/>
            </div>
            {
                passMessageValidation ? 
                <p style={{color:'red', marginTop:'-16px'}} >{passMessageValidation}</p>:
                ''
            }

            {/* Confirm Password */}
            <div className="container"> 
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={passwordValidation2}/>
            </div>
            {
                pass2MessageValidation ? 
                <p style={{color:'red', marginTop:'-16px'}} >{pass2MessageValidation}</p>:
                ''
            }

        </form>
    )
}

export default Formulario