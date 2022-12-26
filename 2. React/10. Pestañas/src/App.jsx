import './App.css'
import Tabs from './components/Tabs';

function App() {
    const pestanhas = [
        {etiqueta:'Tab 1', contenido: 'Este es el contenido de la pestaña 1' },
        {etiqueta:'Tab 2', contenido: 'Mostrando el contenido de la pestaña 2' },
        {etiqueta:'Tab 3', contenido: 'Usted ha hecho click en la pestaña 3 y estamos mostrandole su contenido...' },
    ]

    return (
        <>
            <Tabs tabs={pestanhas} />        
        </>

    );
}
export default App;
