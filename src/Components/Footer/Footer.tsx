import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
       <img src="/img/blanco.png" alt="logo" />
      </div>

      <div className="footer-info">
        <div className="footer-col">
          <h2>Servicios</h2>
          <ul>
            <li>Diseño Web</li>
            <li>Desarrollo</li>
            <li>Hosting</li>
          </ul>
        </div>
        <div className="footer-col">
          <h2>Nosotros</h2>
          <ul>
            <li>Empresa</li>
            <li>Equipo</li>
            <li>Historia</li>
          </ul>
        </div>
        <div className="footer-col">
          <h2>Soporte</h2>
          <ul>
            <li>FAQs</li>
            <li>Contacto</li>
            <li>Términos</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

