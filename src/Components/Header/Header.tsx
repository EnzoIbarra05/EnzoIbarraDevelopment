import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className="Imagen">
        <img src="/img/logoblanco.png" alt="logo" />
      </div>

      <div className="menu-btn" onClick={() => setOpen(!open)}>
        <div className={`hamburger ${open ? "open" : ""}`}></div>
      </div>

      <div className={`navbar ${open ? "open" : ""}`}>
        <a href="#home" className="inicio" onClick={() => setOpen(false)}>
          Inicio
        </a>
        <a href="#sobreMi" onClick={() => setOpen(false)}>
          Sobre mí
        </a>
        <a href="#proyectos" onClick={() => setOpen(false)}>
          Proyectos
        </a>
        <a href="#contacto" onClick={() => setOpen(false)}>
          Contacto
        </a>
      </div>
    </div>
  );
}

