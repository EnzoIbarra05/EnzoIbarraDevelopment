import "./Carrusel.css";

export default function Carrusel() {
  const tecnologias = [
    { src: "/img/react.png", alt: "React" },
    { src: "/img/js.png", alt: "JavaScript" },
    { src: "/img/html.png", alt: "HTML" },
    { src: "/img/css.png", alt: "CSS" },
    { src: "/img/java.png", alt: "Java" },
    { src: "/img/spring.png", alt: "Spring Boot" },
    { src: "/img/git.png", alt: "Git" },
    { src: "/img/figma.png", alt: "Figma" },
    { src: "/img/sql.png", alt: "SQL" },
    { src: "/img/github.png", alt: "GitHub" },
  ];

  // Duplicamos varias veces para asegurar continuidad
  const duplicado = [...tecnologias, ...tecnologias, ...tecnologias];

  return (
    <div className="carrusel-tecnologias">
      <div className="slider">
        {duplicado.map((tec, index) => (
          <div className="slide" key={index}>
            <img src={tec.src} alt={tec.alt} title={tec.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
