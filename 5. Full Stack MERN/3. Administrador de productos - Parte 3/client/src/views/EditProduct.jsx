import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
    const { id } = useParams();
    const navigateToMain = useNavigate();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/product/${id}`)
            .then((res) => {
                setTitle(res.data.data.title);
                setPrice(res.data.data.price);
                setDescription(res.data.data.description);
            })
            .catch(err => console.log(err))
    }, [id])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/product/update/${id}`, {
            title,
            price,
            description
        })
            .then((res) => {
                console.log(res);
                navigateToMain('/');
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1 className='text-center mt-2 mb-2'>Editar Producto</h1>
            <form onSubmit={updateProduct} className="container col-5">
                <div className="input-group mb-3">
                    <label htmlFor='title' className="input-group-text">Title: </label>
                    <input required type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" />
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
                <button type="submit" className="btn btn-primary mb-3 d-block mx-auto">Confirmar</button>
            </form >
        </div>
    )
}

export default EditProduct