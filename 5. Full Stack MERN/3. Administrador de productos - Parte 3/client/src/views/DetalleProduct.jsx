import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import axios from "axios";
import DeleteBtn from "../components/DeleteBtn";

const DetalleProduct = () => {
    const {id} = useParams();
    const [content, setContent] = useState('Loading...');

    useEffect(() => {
        axios.get(`http://localhost:8000/product/${id}`)
            .then((res) => {
                setContent(res.data);
            })
            .catch(err => console.log(err))
    })

    return (
        <div>
            <h1 className="text-center">Detalles del Producto</h1>
            <div>
                {content === 'Loading...' ? 
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                :
                    <>
                        <h3 className="text-center">{content.data.title}</h3>
                        <p className="text-center">Price: ${content.data.price}</p>
                        <p className="text-center">Description: {content.data.description}</p>
                        <div className="d-flex justify-content-center">
                            <Link to={`/${content.data._id}/edit`}>
                                <button className="btn btn-success">Editar</button>
                            </Link>
                            <DeleteBtn id={content.data._id} />
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default DetalleProduct