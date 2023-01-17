import { Outlet, useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const category = e.target.listCategory.value;
        const id = e.target.id.value;
        navigate(`/${category}/${id}`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="listCategory">Search for: </label>
                <select name="listCategory" id="listCategory">
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
                <label htmlFor="id">ID: </label>
                <input type="number" name="id" id="id" />
                <input type="submit" value="Search" />
            </form>
            <Outlet />
        </>
    )
}

export default Form