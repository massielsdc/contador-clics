import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logo from './img/freecodecamp-logo.png';
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo'
         src={logo}
         alt='Logo' />
        </div>   
        <div className='contenedor-principal'>
          <Contador numClics={numClics} />
          <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
          <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
          <p>Massiel Díaz. 2025©</p>   

          </div>
    </div>
  );
}

export default App;
