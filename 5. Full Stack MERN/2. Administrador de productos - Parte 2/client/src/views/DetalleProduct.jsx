import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

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
            <h1>Detalles del Producto</h1>
            <div>
                {content === 'Loading...' ? 
                    <p>Loading...</p>
                :
                    <>
                        <h3>{content.data.title}</h3>
                        <p>Price: ${content.data.price}</p>
                        <p>Description: {content.data.description}</p>
                    </>
                }
            </div>
        </div>
    )
}

export default DetalleProduct