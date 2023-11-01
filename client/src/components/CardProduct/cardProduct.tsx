import { FC, useState } from "react";
import style from "./cardProduct.module.css";
import Image from "next/image";
import { Counter } from "../Counter/counter";

interface Product {
  title: string;
  amount: any;
  brand: string;
  description: string;
  material: string;
  price: number;
  dimensions: string;
  id: string;
  i: number;
  image: string;
}

export const CardProduct: FC<Product> = ({
  i,
  title,
  amount,
  brand,
  description,
  material,
  price,
  dimensions,
  id,
  image,
}: Product) => {
  const [front, setFront] = useState(true);

  // const handlerClick = () => {
  //   setFront(!front);
  // };

  return (
    <div className={style.card_container} key={i}>
      <div
        style={{
          width: "100%",
        }}
      >
        <Image
          src={image}
          alt="photo product"
          width={100}
          height={150}
          style={{ borderRadius: "8px", width: "100%" }}
          quality={100}
        />
      </div>
      {front === true ? (
        <div className={style.front}>
          <div className={style.title}>
            <p>{title}</p>
          </div>

          <div className={style.informacion}>
            <p>Marca: {brand || "-"}</p>
            <p style={{ textAlign: "center" }}>Medidas: {dimensions || "-"}</p>
            <p>Material: {material || "-"}</p>
            <p>Stock: {amount || "-"}</p>
          </div>
          <div className={style.precio}>
            <p>precio: ${price}</p>
          </div>
          <div
            className={style.buttonDescripcion}
            onClick={() => setFront(false)}
          >
            <p>Descripcion</p>
          </div>
          <div>
            <Counter
              id={id}
              amount={amount}
              price={price}
              title={title}
              brand={brand}
              description={description}
              material={material}
              dimensions={dimensions}
              image={image}
            />
          </div>
        </div>
      ) : front === false ? (
        <div className={style.back}>
          <div className={style.descriptionBack}>
            <p>{description}</p>
            <div
              className={style.buttonInformation}
              onClick={() => setFront(true)}
            >
              <p>Informacion</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
