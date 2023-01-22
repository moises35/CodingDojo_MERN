import { Link } from "react-router-dom";

const BtnCancel = () => {
    return (
        <Link to="/">
            <button className="btn btn-danger">Cancel</button>
        </Link>
    )
}

export default BtnCancel