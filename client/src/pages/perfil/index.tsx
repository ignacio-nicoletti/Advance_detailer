import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { updateUser, updateUserImage } from "@/redux/controllers/user";
import { AppDispatch, RootState } from "@/redux/store/store";
import { ProfileProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./perfil.module.css";

export default function Perfil() {
  let profile: ProfileProps = useSelector(
    (state: RootState) => state.profile.user
  );


  const dispatch = useDispatch<AppDispatch>();
  const [image, setImage] = useState(null);

  const paises = [
    "Argentina",
    "Bolivia",
    "Brasil",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Ecuador",
    "El Salvador",
    "Guayana Francesa",
    "Granada",
    "Guatemala",
    "Guayana",
    "Haití",
    "Honduras",
    "Jamaica",
    "México",
    "Nicaragua",
    "Paraguay",
    "Panamá",
    "Perú",
    " Puerto Rico",
    "República Dominicana",
    "Surinam",
    "Uruguay",
    "Venezuela",
  ];
  const [carrito, setCarrito] = useState(null);
  const [editImageActive, setEditImageActive] = useState(false);
  const [editActive, setEditActive] = useState(false);

  const [DataAdress, setDataAdress] = useState({
    codigoPostal: profile.adress.codigoPostal
      ? profile.adress.codigoPostal
      : "codigoPostal",
    provincia: profile.adress.provincia
      ? profile.adress.provincia
      : "provincia",
    localidad: profile.adress.localidad
      ? profile.adress.localidad
      : "localidad",
    callePrincipal: profile.adress.callePrincipal
      ? profile.adress.callePrincipal
      : "callePrincipal",
    calle1: profile.adress.calle1 ? profile.adress.calle1 : "calle1",
    calle2: profile.adress.calle2 ? profile.adress.calle2 : "calle2",
    numero: profile.adress.numero ? profile.adress.numero : "numero",
    piso: profile.adress.piso ? profile.adress.piso : "piso",
  });

  const [datos, setDatos] = useState({
    name: profile.name ? profile.name : "Nombre",
    lastName: profile.lastName ? profile.lastName : "Apellido",
    email: profile.email ? profile.email : "email",
    country: profile.country ? profile.country : "Pais",
    adress: DataAdress ? DataAdress : {},
    dni: profile.dni ? profile.dni : "dni",
  });

  let token: string | null;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement | any>
  ) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handlerLoadImage = () => {
    dispatch(updateUserImage(profile.uid, token, image));
  };

  const handlerEdit = () => {
    setEditActive(true);
  };

  const handleChange = (event: any) => {
    const property = event.target.name;
    const value = event.target.value;
    setDatos({ ...datos, [property]: value });
    if (
      property === "codigoPostal" ||
      "provincia" ||
      "localidad" ||
      "numero" ||
      "calle1" ||
      "calle2" ||
      "callePrincipal" ||
      "piso"
    ) {
      setDataAdress({ ...DataAdress, [property]: value });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setDatos({ ...datos, adress: DataAdress });
    dispatch(updateUser(profile.uid, datos));
    setEditActive(false);
  };

  return (
    <div className={style.contain}>
      <Navbar />
      <div className={style.ProfileHeader}>
        <div className={style.ProfileHeaderImage}>
          {profile.image == "" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50%"
              height="25%"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              color="black"
              onClick={() => setEditImageActive(!editImageActive)}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
            </svg>
          ) : (
            <Image
              src={profile.image}
              alt="carousel current slide"
              width={200}
              height={200}
              style={{ borderRadius: "50%" }}
              onClick={() => setEditImageActive(!editImageActive)}
            />
          )}
          {editImageActive === true ? (
            <div>
              <input
                type="file"
                name=""
                id=""
                onChange={(e) => handleFileChange(e)}
              />
              <button
                onClick={handlerLoadImage}
                disabled={image ? false : true}
              >
                Subir foto
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className={style.name} onClick={() => setEditActive(true)}>
          <p>{profile.name ? profile.name : "name"} </p>
          <p>{profile.lastName ? profile.lastName : "name"}</p>
        </div>
      </div>
      <div className={style.profile}>
        {editActive === false ? (
          <div className={style.info} data-aos="flip-right">
            <div className={style.texto}>
              <p>Email: {profile.email}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                onClick={handlerEdit}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                <path d="M13.5 6.5l4 4"></path>
              </svg>
            </div>
            <div className={style.texto}>
              <p>DNI: {profile.dni ? profile.dni : "dni"}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                onClick={handlerEdit}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                <path d="M13.5 6.5l4 4"></path>
              </svg>
            </div>
            <div className={style.texto}>
              <p>Pais: {profile.country ? profile.country : "country"}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                onClick={handlerEdit}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                <path d="M13.5 6.5l4 4"></path>
              </svg>
            </div>
            <div className={style.adressContain}>
              <p style={{ fontSize: "2rem" }}>Direccion</p>

              <div className={style.adress}>
                <div className={style.adressCol1}>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "white",
                      margin: "0",
                      paddingLeft: "2%",
                    }}
                  >
                    Provincia:
                  </p>
                  <div className={style.adressInfo}>
                    <p>{DataAdress.provincia}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      onClick={handlerEdit}
                      style={{ width: "10%", height: "10%" }}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                      <path d="M13.5 6.5l4 4"></path>
                    </svg>
                  </div>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "white",
                      margin: "0",
                      paddingLeft: "2%",
                    }}
                  >
                    Localidad:
                  </p>
                  <div className={style.adressInfo}>
                    <p>{DataAdress.localidad}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      onClick={handlerEdit}
                      style={{ width: "10%", height: "10%" }}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                      <path d="M13.5 6.5l4 4"></path>
                    </svg>
                  </div>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "white",
                      margin: "0",
                      paddingLeft: "2%",
                    }}
                  >
                    Codigo Postal:
                  </p>
                  <div className={style.adressInfo}>
                    <p>{DataAdress.codigoPostal}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      onClick={handlerEdit}
                      style={{ width: "10%", height: "10%" }}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                      <path d="M13.5 6.5l4 4"></path>
                    </svg>
                  </div>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "white",
                      margin: "0",
                      paddingLeft: "2%",
                    }}
                  >
                    Numero:
                  </p>
                  <div className={style.adressInfo}>
                    <p>{DataAdress.numero}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      onClick={handlerEdit}
                      style={{ width: "10%", height: "10%" }}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                      <path d="M13.5 6.5l4 4"></path>
                    </svg>
                  </div>
                </div>
                <div className={style.adressCol2}>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "white",
                      margin: "0",
                      paddingLeft: "2%",
                    }}
                  >
                    Calle Principal:
                  </p>
                  <div className={style.adressInfo}>
                    <p>{DataAdress.callePrincipal}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      onClick={handlerEdit}
                      style={{ width: "10%", height: "10%" }}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                      <path d="M13.5 6.5l4 4"></path>
                    </svg>
                  </div>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "white",
                      margin: "0",
                      paddingLeft: "2%",
                    }}
                  >
                    Calle 1:
                  </p>
                  <div className={style.adressInfo}>
                    <p>{DataAdress.calle1}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      onClick={handlerEdit}
                      style={{ width: "10%", height: "10%" }}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                      <path d="M13.5 6.5l4 4"></path>
                    </svg>
                  </div>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "white",
                      margin: "0",
                      paddingLeft: "2%",
                    }}
                  >
                    Calle 2:
                  </p>
                  <div className={style.adressInfo}>
                    <p>{DataAdress.calle2}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      onClick={handlerEdit}
                      style={{ width: "10%", height: "10%" }}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                      <path d="M13.5 6.5l4 4"></path>
                    </svg>
                  </div>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "white",
                      margin: "0",
                      paddingLeft: "2%",
                    }}
                  >
                    Piso:
                  </p>
                  <div className={style.adressInfo}>
                    <p>{DataAdress.piso}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      onClick={handlerEdit}
                      style={{ width: "10%", height: "10%" }}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                      <path d="M13.5 6.5l4 4"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.texto}>
              {carrito ? (
                profile.carrito?.map((e: any, i: number) => (
                  <div key={i}>
                    <p>{e}</p>
                  </div>
                ))
              ) : (
                <p>Aun no hay historial de compras</p>
              )}
            </div>
          </div>
        ) : (
          <div className={style.info}>
            <div className={style.textoEdit}>
              <form onSubmit={handleSubmit} data-aos="flip-right">
                <input
                  type="text"
                  value={datos.name}
                  name={"name"}
                  onChange={handleChange}
                  placeholder={"Escribe tu nombre"}
                />

                <input
                  type="text"
                  value={datos.lastName}
                  name={"lastName"}
                  onChange={handleChange}
                  placeholder={"Escribe tu apellido"}
                />
                <input
                  type="text"
                  value={datos.email}
                  name={"email"}
                  onChange={handleChange}
                  placeholder={"Escribe tu email"}
                />
                <input
                  type="number"
                  value={datos.dni}
                  name={"dni"}
                  onChange={handleChange}
                  placeholder={"Escribe tu dni"}
                />
                <select
                  name={"country"}
                  value={datos.country}
                  id=""
                  onChange={handleChange}
                >
                  {paises.map((e: string, i: number) => (
                    <option value={e} key={i}>
                      {e}
                    </option>
                  ))}
                </select>
                <div className={style.adressEdit}>
                  <div className={style.adressEditcol1}>
                    <p>Provincia:</p>
                    <input
                      type="text"
                      value={DataAdress.provincia}
                      name={"provincia"}
                      onChange={handleChange}
                      placeholder={"Escribe tu provincia"}
                    />
                    <p>Localidad:</p>
                    <input
                      type="text"
                      value={DataAdress.localidad}
                      name={"localidad"}
                      onChange={handleChange}
                      placeholder={"Escribe tu localidad"}
                    />
                    <p>Codigo postal:</p>
                    <input
                      type="number"
                      value={DataAdress.codigoPostal}
                      name={"codigoPostal"}
                      onChange={handleChange}
                      placeholder={"Escribe tu codigo postal"}
                    />
                    <p>Numero:</p>
                    <input
                      type="number"
                      value={DataAdress.numero}
                      name={"numero"}
                      onChange={handleChange}
                      placeholder={"Escribe tu numero"}
                    />
                  </div>
                  <div className={style.adressEditcol2}>
                    <p>Calle principal:</p>
                    <input
                      type="text"
                      value={DataAdress.callePrincipal}
                      name={"callePrincipal"}
                      onChange={handleChange}
                      placeholder={"Escribe tu calle 1"}
                    />
                    <p>Calle 1:</p>
                    <input
                      type="text"
                      value={DataAdress.calle1}
                      name={"calle1"}
                      onChange={handleChange}
                      placeholder={"Escribe tu calle 2"}
                    />
                    <p>Calle 2:</p>
                    <input
                      type="text"
                      value={DataAdress.calle2}
                      name={"calle2"}
                      onChange={handleChange}
                      placeholder={"Escribe tu numero de propiedad"}
                    />
                    <p>Piso:</p>
                    <input
                      type="text"
                      value={DataAdress.piso}
                      name={"piso"}
                      onChange={handleChange}
                      placeholder={"Escribe tu piso"}
                    />
                  </div>
                </div>

                <button type="submit">Guardar</button>
              </form>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
