import { useState } from "react";
import './Tabs.css';

const Tabs = (props) => {
    const [tabActual, setTabActual] = useState({
        contenido: '',
        tab: ''
    });

    const handleTab = (e, tab) => {
        e.preventDefault();
        if(tabActual.tab !== '') {
            tabActual.tab.classList.remove('active');
        }
        setTabActual({ contenido: tab.contenido, tab: e.target});
        e.target.classList.add('active');
    }

    return (
        <div className="container">
            <ul className="buttonContainer">
                {
                    props.tabs.map((tab, i) => 
                        <li key={i}>
                            <button onClick={(e) => handleTab(e, tab)}>{tab.etiqueta}</button>
                        </li>
                    )
                } 
            </ul>
            <div>
                <p>{tabActual.contenido}</p>
            </div>

        </div>
    )
}

export default Tabs