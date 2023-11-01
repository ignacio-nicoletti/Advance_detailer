"use client";
import { FC, useState } from "react";
import { useRouter } from "next/router";
import style from "./navbar.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { clearSession } from "@/redux/controllers/Auth";
import { deleteCookie } from "cookies-next";
import Image from "next/image";
import logoadvance from "../../assets/landing/logoAdvance.png";

export const Navbar: FC = () => {
  const router = useRouter();

  const auth = useSelector((state: RootState) => state.Auth);

  const [desp, setDesp] = useState(false);
  const handlerActive = () => {
    setDesp(!desp);
  }; //despliegue de opciones

  const handlerSesion = () => {
    if (typeof window !== "undefined") {
      clearSession();
      localStorage.clear(); //limpio storage
      deleteCookie("cookieToken"); //limpio cookie
    }
    router.push("/landingpage");
    setTimeout(() => router.reload(), 1000);
  };

  let OptionsNav = [
    { option: "Inicio", path: "/landingpage" },
    { option: "Tratamientos", path: "/tratamientos" },
    { option: "Servicios", path: "/servicios" },
    { option: "Trabajos", path: "/trabajos" },
    { option: "Sobre Nosotros", path: "/landingpage#about" },
    { option: "Tienda", path: "/" },
  ];
  const [isactive, setActive] = useState(true);

  return (
    <>
      <div className={style.navarContain}>
        <div className={style.navbarMobile}>
          <div className={style.logo}>
            <Image
              src={logoadvance}
              alt="Logo advance_detailer"
              style={{
                borderRadius: "10px",
                margin: "5%",
                width: "40%",
                height: "60%",
              }}
            />
          </div>
          {isactive == false ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              onClick={() => {
                setActive(!isactive);
              }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              onClick={() => {
                setActive(!isactive);
              }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          )}
        </div>

        {isactive === true ? (
          <div className={style.optionMobile}>
            <ul className={style.ul}>
              {OptionsNav.map((e: any, index: number) => (
                <li key={index}>
                  <Link className={style.link} href={e.path}>
                    {e.option}
                  </Link>
                </li>
              ))}

              {auth.autorized === true ? (
                <li>
                  <Link className={style.link} href="">
                    <p onClick={handlerActive}>Cuenta</p>
                    {desp === true ? (
                      <div className={style.activeMobile} data-aos="flip-up">
                        <Link href="/perfil" className={style.linkSesion}>
                          Perfil
                        </Link>

                        <Link href="/compras" className={style.linkSesion}>
                          Compras
                        </Link>

                        <Link
                          href="/landingpage"
                          className={style.linkSesion}
                          onClick={handlerSesion}
                        >
                          Cerrar sesion
                        </Link>
                      </div>
                    ) : (
                      ""
                    )}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link className={style.link} href="/login">
                    Ingresar
                  </Link>
                </li>
              )}
            </ul>
          </div>
        ) : (
          ""
        )}

        {/* Navbar dektop */}

        <div className={style.navbar}>
          <Image
            src={logoadvance}
            alt="Logo advance_detailer"
            style={{
              width: "20%",
              height: "20%",
            }}
          />

          <ul className={style.ul}>
            {OptionsNav.map((e: any, index: number) => (
              <Link className={style.link} href={e.path} key={index}>
                {e.option}
              </Link>
            ))}

            {auth.autorized === true ? (
              <Link href="/carrito" className={style.link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  style={{ width: "100%", height: "25" }}
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M17 17h-11v-14h-2"></path>
                  <path d="M6 5l14 1l-1 7h-13"></path>
                </svg>
              </Link>
            ) : (
              ""
            )}
            {auth.autorized === true ? (
              <li>
                <Link className={style.link} href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    onClick={handlerActive}
                    style={{ width: "100%", height: "25" }}
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </Link>
              </li>
            ) : (
              <li>
                <Link className={style.link} href="/login">
                  Ingresar
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className={style.containDesplegable}>

            {desp === true ? (
              <div className={style.active}>
                <Link href="/perfil" className={style.linkSesion}>
                  Mi Perfil
                </Link>

                <Link href="/compras" className={style.linkSesion}>
                  Compras
                </Link>

                <Link
                  href="/landingpage"
                  className={style.linkSesion}
                  onClick={handlerSesion}
                  >
                  Cerrar sesion
                </Link>
              </div>
            ) : (
              ""
              )}
              </div>
      </div>
    </>
  );
};
