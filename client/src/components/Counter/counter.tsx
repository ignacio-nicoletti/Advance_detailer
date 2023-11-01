import { ProductStore } from "@/redux/controllers/products";
import { AppDispatch } from "@/redux/store/store";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./counter.module.css";

interface counter {
  id: string;
  amount: number;
  price: number;
  title: string;
  brand: string;
  description: string;
  material: string;
  dimensions: string;
  image:string;
}

export const Counter: FC<counter> = ({
  id,
  amount,
  price,
  title,
  brand,
  description,
  material,
  dimensions,
  image
}: counter) => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch<AppDispatch>();

  const handlerStore = () => {
    let token = window.localStorage.getItem("token");

    if (token) {
      if(count>0)
      dispatch(
        ProductStore(
          id,
          count,
          price,
          title,
          brand,
          description,
          material,
          dimensions,
          image
        )
      );
    }
  };

  const increment = () => {
    if (amount != count) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if(count!=0)
    setCount(count - 1);
  };

  return (
    <>
      <div className={styles.contain}>
        <div className={styles.counter}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="24"
            // height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            onClick={decrement}
            className={styles.button}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M9 12l6 0"></path>
          </svg>

          <p className={styles.p}>{count}</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="24"
            // height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            onClick={increment}
            className={styles.button}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M9 12l6 0"></path>
            <path d="M12 9l0 6"></path>
          </svg>
        </div>

        <div className={styles.addcarrito}>
          <p onClick={handlerStore}>Agregar al carrito</p>
        </div>
      </div>
    </>
  );
};
