import axios from 'axios'
import { useState } from 'react'

const FormProduct = () => {
    // Hook states
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const sendForm = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/product/add', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

        setTitle('')
        setPrice('')
        setDescription('')
    }

    return (
        <form onSubmit={sendForm}>
            <div className="contInput">
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} value={title} />
            </div>
            <div className="contInput">
                <label htmlFor="price">Price: </label>
                <input type="text" name="price" id="price" onChange={(e) => setPrice(e.target.value)} value={price} />
            </div>
            <div className="contInput">
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} value={description} />
            </div>
            <input type="submit" value="Create" />
        </form>
    )
}

export default FormProduct