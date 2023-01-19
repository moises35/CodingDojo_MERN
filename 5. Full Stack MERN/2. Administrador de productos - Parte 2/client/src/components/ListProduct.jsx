import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListProduct = ({pulsador}) => {

    const [listProduct, setListProduct] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/product/all')
            .then((res) => {
                console.log(res);
                setListProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [pulsador])

    if(listProduct.length < 1) {
        return (
            <div>No hay productos en la lista</div>
        )
    } else {
        return (
            <div>
                <ul>
                    {
                        listProduct.data.map((product, i) => {
                            return (
                                <li key={product._id}>
                                    <Link to={`/${product._id}`}>{product.title}</Link>
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