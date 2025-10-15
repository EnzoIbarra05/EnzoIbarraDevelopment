import "./SobreMi.css";

export default function SobreMi() {
  return (
    <section className="sobre-mi">
      <div className="titulo">
        <h1>
          <span id="colorSobre">Sobre</span> <span id="colorMi">Mi</span>
        </h1>
      </div>
      <div className="descripcion">
        <p>
          Desarrollador full-stack apasionado con experiencia en tecnologías
          web modernas y diseño.
        </p>
      </div>
      <div className="perfil">
        <div className="info">
          <div className="infoTitle">
            <h1>Quien soy?</h1>
          </div>
          <div className="infoParrafo">
            Mi nombre es Enzo Ibarra, soy un desarrollador full-stack y diseñador
            web dedicado que disfruta creando soluciones digitales innovadoras.
            Con experiencia en tecnologías frontend y backend, doy vida a mis
            ideas mediante código limpio y diseño creativo. Mi pasión reside en
            crear aplicaciones centradas en el usuario que no solo tengan un
            aspecto excelente, sino que también ofrezcan una funcionalidad
            excepcional. Disfruto trabajando con frameworks modernos y siempre me
            mantengo al día con las últimas tendencias del sector.
          </div>
          <div className="infoButons">
            <a href="/src/File/cvEnzo.pdf" download="CvEnzo.pdf">
              <button id="cv">Descargar CV</button>
            </a>
            <a
              href="https://github.com/EnzoIbarra05?tab=repositories"
              target="_blank"
              data-social="github"
              rel="noreferrer"
            >
              <button id="git">Mi GitHub</button>
            </a>
          </div>
        </div>
        <div className="tecnologia">
          <div className="tecno1">
            <div className="cartita1">
              <img src="../../../public/img/codigo.png" alt="" />
              <p>Frontend</p>
              <p id="descri">React, JavaScript, HTML/CSS</p>
            </div>
            <div className="cartita1">
              <img src="../../../public/img/backend.png" alt="" />
              <p>Backend</p>
              <p id="descri">Java, Spring Boot, Node.js</p>
            </div>
          </div>
          <div className="tecno2">
            <div className="cartita1">
              <img src="../../../public/img/database.png" alt="" />
              <p>Database</p>
              <p id="descri">SQL, MongoDB, MySQL</p>
            </div>
            <div className="cartita1">
              <img src="../../../public/img/paleta.png" alt="" />
              <p>Design</p>
              <p id="descri">Figma, UI/UX Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
