import { useState } from 'react';
import FormProduct from './../components/FormProduct';
import ListProduct from './../components/ListProduct';

const Main = () => {
    const [pulsador, setPulsador] = useState(false);
    return (
        <div className="main">
            <h1>Product Manager</h1>
			<FormProduct setPulsador={setPulsador} pulsador={pulsador} />
			<h1>All Products</h1>
			<ListProduct pulsador={pulsador} />
        </div>
    )
}

export default Main