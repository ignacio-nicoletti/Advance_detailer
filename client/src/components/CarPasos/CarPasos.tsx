import { FC, useState } from "react";
import style from "./CarPasos.module.css";

export const CardPasos: FC = () => {
  let infoCard: Object[] = [
    {
      id: 0,
      title: "Lavado completo y limpieza profunda",
      descripcion:
        "Se realiza una limpieza profunda del interior y exterior del vehículo: carrocería, llantas, pasaruedas e insignias.",
      color: "#ffff",
    },
    {
      id: 1,
      title: "Descontaminado de Carrocería (Claybar)",
      descripcion:
        "El siguiente paso es la descontaminación de carrocería, vidrios y opticas utilizando Claybar. ¿Por qué es importante este proceso? Con el tiempo, la pintura de tu vehículo puede ponerse ligeramente áspera al tacto, esto se debe a la acumulación gradual de diferentes contaminantes de las superficies, los cuales se adhieren de tal forma que no es posible eliminarlos por el lavado común. Por eso, este paso es indispensable para que el tratamiento sea absorbido por la pintura.",
      color: "#ffff",
    },
    {
      id: 2,
      title: "Pulido y corrección de barniz o laca",
      descripcion:
        "Una vez que el vehículo se encuentre en condiciones óptimas para comenzar con el tratamiento pasaremos al pulido en tres fases: La primera (corte) elimina rasguños y pinturas automotrices aplicadas en fábrica, arañazos y otros defectos. La segunda busca eliminar aquellas imperfecciones que quedan luego de la primera etapa, dejando una superficie uniforme. Por último y no menos importante la tercer etapa, que busca mejorar el color y el brillo dando profundidad.",
      color: "#ffff",
    },
    {
      id: 3,
      title: "Hidratación de plásticos exteriores",
      descripcion:
        "En esta etapa se busca la restauración completa de los plásticos del vehículo, aplicando diferentes productos que logran su propósito.",
      color: "#ffff",
    },
    {
      id: 4,
      title: "Detallado de insignias",
      descripcion:
        "Este paso incluye el cromado y pulido de piezas metálicas y aluminio del exterior del vehículo.",
      color: "#ffff",
    },
    {
      id: 5,
      title: "Sellado y limpieza de cristales",
      descripcion:
        "Aquí haremos la limpieza de vidrios y ópticas, para dejarlos brillosos y libres de cualquier mancha de insectos, residuos de árboles o animales y en general del sarro proveniente del agua de lluvia para luego el sellado de los mismos.",
      color: "#ffff",
    },
    {
      id: 6,
      title: "Sellado y Abrillantado de plásticos interiores y exteriores",
      descripcion:
        "Este último paso le devolverá el brillo a los parachoques, gomas, protectores laterales o cualquier superficie plástica que se encuentre en el exterior o interior del vehículo. La aplicación del sellador permitirá realzar el color y aumentar el brillo, prolongar el lavado y proteger al vehículo de los factores climáticos.",
      color: "#ffff",
    },
  ];
  const [informacion, setInformacion] = useState<any>({ informacion: "" });
  const [active, setActive] = useState(false);

  // :#f1d518

  const handlerClick = (e: any) => {
    setInformacion({ descripcion: e.descripcion }); //toma la info de quien se clickeo

    setActive(!active);
  };

  return (
    <div className={style.pasos}>
      <div className={style.cardContain}>
        {infoCard.map((e: any, i: number) => (
          <div
            className={style.card}
            key={i}
            onClick={() => handlerClick(e)}
            style={{ color: e.color }}
          >
            <p>{e.title}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ width: "5%", height: "25" }}
              className={style.flecha}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.585l-1.999 .001a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l1.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z"
                stroke-width="0"
                fill="currentColor"
              ></path>
              <path
                d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
                stroke-width="0"
                fill="currentColor"
              ></path>
              <path
                d="M6 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
                stroke-width="0"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        ))}
      </div>
      {active === true ? (
        <div className={style.descriptionContain} style={{}}>
          <p>{informacion.descripcion}</p>
        </div>
      ) : null}
    </div>
  );
};
