import './Datos.css'

const Datos = ({firstName, lastName, password, confirmPassword, email}) => {
    return (
        <div>
            <h2>Your form data</h2>
            <p><strong>First Name:</strong>  {firstName}</p>
            <p><strong>Last Name:</strong>  {lastName}</p>
            <p><strong>Email:</strong>  {email}</p>
            <p><strong>Password:</strong>  {password}</p>
            <p><strong>Confirm password:</strong>  {confirmPassword}</p>
        </div>
    )
}

export default Datos