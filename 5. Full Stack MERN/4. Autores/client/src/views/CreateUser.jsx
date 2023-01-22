import FormAuthor from "../components/FormAuthor"
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import ErrorMesssage from "./../components/ErrorMessage"

const CreateUser = () => {
    const [smsError, setSmsError] = useState('')

    const navegarMain = useNavigate()
    const createUser = (nombre) => {
        axios.post('http://localhost:8000/api/authors/new', {
            name: nombre
        })
            .then(res => {
                console.log(res)
                setSmsError("")
                navegarMain('/')
            })
            .catch(err => {
                console.log(err)
                setSmsError(err.response.data.error.errors.name.message)
            })
    }

    return (
        <>
            <div className="ml-4">
                <Link to='/'>Home</Link>
                <p>Add a new author:</p>
            </div>
            <FormAuthor funcFormAction={createUser}/>
            {smsError !== '' ? <ErrorMesssage sms={smsError} /> : '' }
        </>
    )
}

export default CreateUser