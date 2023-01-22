import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import BtnEdit from "../components/BtnEdit"
import BtnDelete from "../components/BtnDelete"

const Main = () => {
    const [authors, setAuthors] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [deleted, setDeleted] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/all')
            .then(res => {
                setAuthors(res.data.allAuthors)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [deleted])

    return (
        <div>
            <div className="m-4">
                <Link to='/new'>Add an author</Link>
                <p>We have quotes by:</p>
            </div>
            {/* Div para contener las tablas con una proporcion del 75% */}
            <div className="container-fluid ">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        { loaded && authors.map((author, i) => {
                            return (
                                <tr key={author._id}>
                                    <td>{author.name}</td>
                                    <td>
                                        <Link to={'/edit/' + author._id}>
                                            <BtnEdit />
                                        </Link>
                                        <BtnDelete id={author._id} setDeleted={setDeleted} eliminar={deleted} />
                                    </td>
                                </tr>
                            )
                        })
                        }    
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Main