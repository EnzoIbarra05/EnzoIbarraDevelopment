import "./Proyectos.css";

export default function Proyectos() {
  return (
    <section className="proyectos" id="proyectos">
      <h1>
        <span id="mi">Mi </span>
        <span id="portfolio">Portfolio</span>
      </h1>

      <div className="cards-container">
        {/* Carta 1 */}
        <div className="card">
          <div className="carousel carousel-1">
            <img src="/img/logSabor.png" alt="Vista 1" />
            <img src="/img/cajero.png" alt="Vista 2" />
            <img src="/img/empleados.png" alt="Vista 3" />
          </div>
          <div className="card-content">
            <h2>Aplicación Web "Buen Sabor"</h2>
            <p id="parraf">
              Gestión integral para restaurante: pedidos, productos, stock y más.
            </p>
            <div className="tecnologias">
              <span className="usado">React</span>
              <span className="usado">Spring Boot</span>
              <span className="usado">MySQL</span>
              <span className="usado">CSS</span>
              <span className="usado">Axios</span>
              <span className="usado">JWT</span>
            </div>
          </div>
        </div>

        {/* Carta 2 */}
        <div className="card">
          <div className="carousel carousel-2">
            <img src="/img/cap1.png" alt="Vista 1" />
            <img src="/img/cap2.png" alt="Vista 2" />
            <img src="/img/cap3.png" alt="Vista 3" />
            <img src="/img/cap4.png" alt="Vista 4" />
          </div>
          <div className="card-content">
            <h2>Landing page ferreteria</h2>
            <p id="parraf">
              Sitio web para comercial ferreteria, ubicacion, contacto e info.
            </p>
            <div className="tecnologias">
              <span className="usado">HTML</span>
              <span className="usado">CSS</span>
              <span className="usado">JavaScript</span>
              <span className="usado">React</span>
              <span className="usado">Figma design</span>
            </div>
            <div className="linkgit"><a href="https://ferreteria-im.vercel.app/"> ir a la pagina <img  className="ico" src="/img/redireccion.png" alt="" /> </a></div>
          </div>
        </div>

        {/* Carta 3 */}
        <div className="card">
          <div className="carousel carousel-3">
            <img src="/img/mipag.png" alt="Vista 1" />
            <img src="/img/sobreMi.png" alt="Vista 2" />
            <img src="/img/contactame.png" alt="Vista 3" />
          </div>
          <div className="card-content">
            <h2>Portfolio Personal</h2>
            <p id="parraf">
              Mi sitio personal donde muestro mis proyectos, habilidades y contacto profesional.
            </p>
            <div className="tecnologias">
              <span className="usado">React</span>
              <span className="usado">CSS</span>
              <span className="usado">HTML</span>
            </div>
            <div className="linkgit"><a href="https://github.com/EnzoIbarra05/Mi-portfolio.git"> ir a GIT <img  className="ico" src="/img/redireccion.png" alt="" /> </a></div>
          </div>
        </div>


        {/* Carta 4 */}
           <div className="card">
          <div className="carousel carousel-3">
            <img src="/img/visualanding.png" alt="Vista 1" />
            <img src="/img/visuaportfolio.png" alt="Vista 2" />
            <img src="/img/visuacontacto.png" alt="Vista 3" />
          </div>
          <div className="card-content">
            <h2>Pagina Empresarial</h2>
            <p id="parraf">
              Sitio web empresarial donde muestra proyectos, habilidades y contacto profesional.
            </p>
            <div className="tecnologias">
              <span className="usado">React</span>
              <span className="usado">CSS</span>
              <span className="usado">HTML</span>
            </div>
            <div className="linkgit"><a href="https://visua-landing.vercel.app/"> ir a la pagina <img  className="ico" src="/img/redireccion.png" alt="" /></a></div>
          </div>
        </div>
       
      </div>
    </section>
  );
}
