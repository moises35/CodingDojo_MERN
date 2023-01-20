import axios from 'axios'
import { useState } from 'react'

const FormProduct = ({setPulsador, pulsador}) => {
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
            .then((res) => {
                console.log(res);
                setPulsador(!pulsador)
            })
            .catch(err => console.log(err))

        setTitle('')
        setPrice('')
        setDescription('')
    }

    return (
        // Agrupamos el form dentro de un container con tamaño fijo y centrado
        <form onSubmit={sendForm} className="container col-5">
            <div className="input-group mb-3">
                <label htmlFor='title' className="input-group-text">Title: </label>
                <input required type ="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" />
            </div>
            <div className="input-group mb-3">
                <label htmlFor='price' className="input-group-text">Price: </label>
                <input required type="text" name="price" id="price" onChange={(e) => setPrice(e.target.value)} value={price} className="form-control" />
                <label htmlFor='price' className="input-group-text">$</label>
            </div>
            <div className="input-group mb-3">
                <label htmlFor='description' className="input-group-text">Description: </label>
                <input required type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} value={description} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary mb-3 d-block mx-auto">Add Product</button>
        </form>
    )
}

export default FormProduct