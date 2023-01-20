import { useState } from 'react';
import FormProduct from './../components/FormProduct';
import ListProduct from './../components/ListProduct';

const Main = () => {
    const [pulsador, setPulsador] = useState(false);
    return (
        <div className="main">
            <h1 className='text-center'>Product Manager</h1>
			<FormProduct setPulsador={setPulsador} pulsador={pulsador} />
            <hr></hr>
			<h1 className='text-center'>All Products</h1>
			<ListProduct pulsador={pulsador} setPulsador={setPulsador} />
        </div>
    )
}

export default Main