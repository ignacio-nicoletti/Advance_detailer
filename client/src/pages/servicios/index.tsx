import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import Link from "next/link";
import style from "./servicios.module.css";

export default function Servicios() {
  return (
    <div className={style.serviciosContain}>
      <Navbar />
      <div className={style.grillaService}>
        <div className={style.title}>
          <h3>
          Nuestro equipo te ofrece los siguientes servicios
          </h3>
        </div>

        <div className={style.tratamientos}>
          <h4>Tratamientos</h4>
          <div className={style.informacionTratamientos}>
            <p
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              Tratamientos cerámicos.
            </p>
            <p
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              Tratamientos acrílicos.
            </p>
            <p
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              Tratamientos abrillantados.
            </p>
          </div>
          <div className={style.linkContain}>
            <Link href="/tratamientos" className={style.link}>
              <p>Mas Informacion</p>
            </Link>
          </div>
        </div>
        <div className={style.otrosService}>
          <p
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Lavados y detalles de interiores.
          </p>
          <p
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Lavados premium.
          </p>
          <p
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Saca bollos.
          </p>
          <p
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Restauración de ópticas y tableros.
          </p>
          <p
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Tratado y restauración de llantas.
          </p>
          <p
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Colocación de polarizados.
          </p>
          <p
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Tapicería general y restauración.
          </p>
          <p
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Distribuidor oficial de productos para detailing Acrochemical.
          </p>
          <p
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Distribuidores oficial de productos para detailing Glänzen.
          </p>
          <p
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Detallado de vano-motor y sus elementos.
          </p>
          <p
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Restauracion de pintura en la carroceria.
          </p>
          <p
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Lavado y reacondicionamiento de vano-motor.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
