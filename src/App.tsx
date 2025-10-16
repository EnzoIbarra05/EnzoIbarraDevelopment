import './App.css';
import Header from './Components/Header/Header';
import SobreMi from './Components/SobreMi/SobreMi';
import Proyectos from './Components/Proyectos/Proyectos';
import Contacto from './Components/Contacto/Contacto';
import Footer from './Components/Footer/Footer';
import Carrusel from './Components/Carrusel/Carrusel';

function App() {
  return (
    <>
      <div id='home'><Header /></div>

      <div className='principal'>
        <div className="hero-container">
          <div className="hero-content">
            <h1>ENZO IBARRA</h1>
            <p>
              Desarrollador Full-Stack y diseñador web que da vida a ideas digitales,
              fusionando tecnología, creatividad y precisión en cada proyecto.
            </p>
            <div className='containButton'>
              <a href="#proyectos">
                <button id='job'>Ver mis trabajos</button>
              </a>
              <a href="#contacto">
                <button id='contact'>Ponte en contacto</button>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src="/img/3dImage.png" alt="Enzo 3D" />
          </div>
        </div>
      </div>

      <div id='sobreMi'><SobreMi /></div>
      <div id='proyectos'><Proyectos /></div>
      <div id='carrusel'><Carrusel /></div>
      <div id='contacto'><Contacto /></div>
      <Footer />
    </>
  );
}

export default App;
