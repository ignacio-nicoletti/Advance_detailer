import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { AppDispatch, RootState } from "@/redux/store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./login.module.css";

import Router from "next/router";
import { postlogin, postRegister } from "@/redux/controllers/Auth";

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const [login, setLogin] = useState(true); //alterna login y register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { status } = useSelector((state: RootState) => state.Auth);

  let values = { email, password };

  const handlerActive = () => {
    setLogin(!login);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login === true
      ? dispatch(postlogin(values))
      : login === false
      ? dispatch(postRegister(values))
      : "";
  };

  if (status === 200) {
    Router.push("/");
  } //si se logueo ingresa

  return (
    <div className={style.login}>
      <Navbar />
      <div className={style.contain}>
        <div className={style.check}>
          <span>Ingresar </span>

          <input
            className={style.checkbox}
            type="checkbox"
            id="reg-log"
            name="reg-log"
            onClick={handlerActive}
            hidden={true}
          />
          <label htmlFor="reg-log"></label>

          <span>Registrarse</span>

          {/* <div>
            <input type="checkbox" id="toggle" />
            <label htmlFor="toggle"></label>
          </div> */}
        </div>

        {login === true ? (
          <div className={style.containFront}>
            <p>Ingresar</p>
            <form onSubmit={handleSubmit}>
              <input
                id="email"
                type="email"
                placeholder="Ingresa tu email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Entrar</button>
            </form>
          </div>
        ) : (
          <div className={style.containBack}>
            <p>Registrarse</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Ingresa tu email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Ingresa tu contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit">Registrarse</button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
