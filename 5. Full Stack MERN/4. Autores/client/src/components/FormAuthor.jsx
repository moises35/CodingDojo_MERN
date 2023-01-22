import axios from "axios"
import BtnCancel from "./BtnCancel"
import BtnSubmit from "./BtnSubmit"
import { useEffect, useState } from "react"

const FormAuthor = ({funcFormAction, id}) => {
    const [defaultValue, setDefaultValue] = useState('')

    useEffect(() => {
        if(id !== undefined){
            axios.get('http://localhost:8000/api/authors/' + id)
                .then(res => {
                    console.log(res.data.oneAuthor.name)
                    setDefaultValue(res.data.oneAuthor.name)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [id])

    const sendForm = (e) => {
        e.preventDefault();
        funcFormAction(e.target.name.value)
    }

    return (
        <>
            <div className="row justify-content-md-start ml-4 ">
                <form className="border border-dark p-4" onSubmit={sendForm}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" name="name" defaultValue={defaultValue} />
                    </div>
                    <div className="d-flex justify-content-between">
                        <BtnCancel />
                        <BtnSubmit />
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormAuthor