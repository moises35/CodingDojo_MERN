import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FormAuthor from "./../components/FormAuthor";
import { useState } from "react";
import ErrorMesssage from "./../components/ErrorMessage";

const EditUser = () => {
    const { id } = useParams();
    const [smsError, setSmsError] = useState('')
    const navegarMain = useNavigate();

    const editUser = (name) => {
        axios.put('http://localhost:8000/api/authors/update/' + id, {
            name: name
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
                <p>Edit this author:</p>
            </div>
            <FormAuthor funcFormAction={editUser} id={id}/>
            {smsError !== '' ? <ErrorMesssage sms={smsError} /> : '' }
        </>
    )
}

export default EditUser