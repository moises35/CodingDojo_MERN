import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteBtn from "./DeleteBtn";

const ListProduct = ({pulsador, setPulsador}) => {

    const [listProduct, setListProduct] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/product/all')
            .then((res) => {
                console.log(res);
                setListProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [pulsador])

    if(listProduct.data === undefined || listProduct.data.length < 1) {
        return (
            <div>No hay productos en la lista</div>
        )
    } else {
        return (
            <div className="container col-6">
                <ul className="list-group ">
                    {
                        listProduct.data.map((product, i) => {
                            return (     
                                <li className="list-group-item d-flex justify-content-between align-items-center" key={product._id}>
                                    <Link to={`/${product._id}`}>{product.title}</Link>
                                    <div>
                                        <Link to={`/${product._id}/edit`}>
                                            <button className="btn btn-success mr-2">Editar</button>
                                        </Link>
                                        <DeleteBtn pulsador={pulsador} setPulsador={setPulsador} id={product._id} />
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ListProduct