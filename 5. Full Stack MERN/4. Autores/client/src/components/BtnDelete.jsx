import axios from "axios"

const BtnDelete = ({id, setDeleted, eliminar}) => {
    const deleteAuthor = (e) => {
        axios.delete('http://localhost:8000/api/authors/delete/' + id)
            .then(res => {
                console.log(res)
                setDeleted(!eliminar)
            })
            .catch(err => console.log(err))
    }

    return (
        <button type="button" className="btn btn-outline-danger btn-sm ml-2" onClick={deleteAuthor}>Delete</button>
    )
}

export default BtnDelete