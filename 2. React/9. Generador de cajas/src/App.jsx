import './App.css'
import { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxContain from './components/BoxContain';

function App() {
    const [data, setData] = useState({
        boxes: []
    });

    const addBox = (color) => {
        setData({
            boxes: [...data.boxes, color]
        });
    }

    return (
        <>
            <BoxForm addBox={addBox} />
            <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
                {
                    data.boxes.map((box, i) => <BoxContain key={i} color={box} />)
                }
            </div>
        </>

    );
}
export default App;
