import { Navbar } from "@/components/navbar/navbar";
import style from "./landingPage.module.css";
import ceramico from "../../assets/landing/ceramico2.jpg";
import lavado from "../../assets/landing/lavado.jpg";
import interior from "../../assets/landing/interior.jpg";
import Image from "next/image";
import { CardMember } from "@/components/CardMember/cardMember";
import { Footer } from "@/components/Footer/footer";
import "./landingPage.module.css";
import Link from "next/link";
import logoadvance from "../../assets/landing/logoAdvance.png";

export default function LandingPage() {
  return (
    <div className={style.landing}>
      <Navbar />
      <div className={style.titleContain}>
        <div className={style.logo}>
          <Image
            src={logoadvance}
            alt="Logo advance_detailer"
            style={{
              marginTop: "10%",
              width: "30%",
              height: "50%",
            }}
          />
        </div>

        <h1 data-aos="zoom-in" data-aos-duration="1500">
          DEJALO COMO NUEVO!!
        </h1>

        <p data-aos="zoom-in" data-aos-duration="2500">
          Somos Advance Detailer, nos dedicamos a renovar tu vehiculo y dejarlo
          como siempre <br /> quisiste tenerlo. Para lograrlo te ofrecemos lo
          siguiente...
        </p>
      </div>
      {/* seccion tratamientos */}
      <div className={style.servicesContain}>
        <div className={style.serviceBox}>
          <h2>Tratamientos</h2>

          <div className={style.informacion}>
            <div className={style.image}>
              <Image
                src={ceramico}
                alt="Logo advance_detailer"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>

            <p>
              Proceso mediante el cual se afina la superficie del vehiculos,
              eliminando marcas, roces, rayadura, previo a este proceso se
              prepara la superficie para pulir. Posterior al proceso se la
              prepara para ser sellada.
            </p>
          </div>
        </div>

        <div className={style.serviceBox}>
          <h2>Lavados</h2>

          <div className={style.informacion}>
            <div className={style.image}>
              <Image
                src={lavado}
                alt="Logo advance_detailer"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />{" "}
            </div>
            <p>
              Servicio de limpieza y detallados del vehículos que se realiza con
              productos y técnicas de alta calidad. Dentro de esta categoria
              ofrecemos dos tipos de lavados: Basico y premium.
            </p>
          </div>
        </div>

        <div className={style.serviceBox}>
          <h2>Interiores</h2>

          <div className={style.informacion}>
            <div className={style.image}>
              <Image
                src={interior}
                alt="Logo advance_detailer"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <p>
              En este servicio ofrecemos la posibilidad de descontaminar
              absolutamente todo el interior de su vehiculo. Desde polvo y
              suciedad hasta manchas dentro del habitaculo.
            </p>
          </div>
        </div>
        <div className={style.buttonService}>
          <Link href="/trabajos">
            <button id="about">Ver más</button>
          </Link>
        </div>
      </div>

      {/* seccion quienes somos */}
      <div className={style.aboutContain}>
        <div className={style.about}>
          <h2>¿Quienes somos?</h2>
          <div className={style.textAbout}>
            <p>
              Nuestro equipo es un mixto de especialistas de diferentes áreas
              del detailing automotor, tales como lavado y encerado, limpieza de
              interiores, pulido, abrillantado de la carrocería, tapicería,
              entre otros, contando con las últimas técnicas y tendencias del
              mercado.
            </p>

            <p>
              Asegurando éxito general del proceso al detalle. Nuestra misión
              como equipo es brindar servicios de alta calidad y mejorar la
              apariencia y el estado de los vehículos superando las expectativas
              de nuestros clientes.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
