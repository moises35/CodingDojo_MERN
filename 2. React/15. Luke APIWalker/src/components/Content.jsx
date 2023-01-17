import ObiWan from "./ObiWan";
import {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Content = () => {
    const {category, id} = useParams();

    const [dataResponse, setDataResponse] = useState({
        data: {},
        done: false
    });

    useEffect(() => {
        let peticion = '';
        // Verificamos si category es undefined y si ID existe
        if(category === undefined && id !== undefined) {
            peticion = `https://swapi.dev/api/people/${id}/`;
        } else {
            peticion = `https://swapi.dev/api/${category}/${id}/`;
        }

        axios.get(peticion)
            .then( res => {
                setDataResponse({
                    data: res.data,
                    done: true
                });
            })
            .catch(err => {
                setDataResponse({
                    data: {'error': '404 Not Found'},
                    done: false
                });
                console.log(err);
            });
    }, [category, id]);

    if(dataResponse.data.error === '404 Not Found') {
        return (
            <ObiWan />
        )
    } else if (dataResponse.done) {
        return (
            <div>
                {
                    Object.keys(dataResponse.data).slice(0, 5).map((key) => {
                        return (
                            <div key={dataResponse.data}>  
                                <h3>{key.replace(/^\w/, (c) => c.toUpperCase())}: <span style={{fontWeight:"normal"}} >{dataResponse.data[key]}</span></h3>
                            </div>
                        )
                    })}
            </div>
        )
    }

}

export default Content