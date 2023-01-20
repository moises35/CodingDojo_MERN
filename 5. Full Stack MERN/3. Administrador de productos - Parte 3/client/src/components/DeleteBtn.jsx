import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteBtn = ({id, setPulsador, pulsador}) => {
    const navigateMain = useNavigate();

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/product/delete/${id}`)
            .then((res) => {
                console.log(res);
                if(setPulsador !== undefined) {
                    setPulsador(!pulsador);
                }
                navigateMain('/');
            })
            .catch(err => console.log(err))
    }


    return (
        <button className="btn btn-danger" onClick={() => deleteProduct(id)}>Eliminar</button>
    )
}

export default DeleteBtn