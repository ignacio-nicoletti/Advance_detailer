import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store/store";
import { useEffect, useMemo, useState } from "react";
import { Navbar } from "../components/navbar/navbar";
import style from "../styles/Home.module.css";
import { CardProduct } from "@/components/CardProduct/cardProduct";
import { getProduct } from "@/redux/controllers/products";
import { Footer } from "@/components/Footer/footer";
import FiltroStore from "@/components/filtroStore/filtroStore";

export default function Home() {
  const info = useSelector((state: RootState) => state.product.products);
  const [filtro, setFiltro] = useState({ brand: "todo", precio: "aleatorio" });
  const [data, setData] = useState(info);
  // let token: String | null = "";
  // if (typeof window !== "undefined") {
  //   token = localStorage.getItem("token");
  // }

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useMemo(() => {
    let result: any = [];
    if (filtro.brand !== "todo") {
      const filter = info.filter((el: any) => el.brand === filtro.brand);
      filter != "" ? (result = filter) : (result = info);
    } else {
      result = info;
    }

    setData(result);
    if (filtro.precio !== "aleatorio") {
      switch (filtro.precio) {
        case "alto":
          result.sort();
          break;

        case "bajo":
          console.log("precio bajo");

          break;

        default:
          console.log("default");
      }
    }
  }, [info,filtro]);

  useEffect(() => {
    setData(info);
  }, [info]);

  return (
    <div className={style.home}>
      <Navbar />
      <p className={style.title}>Nuestra tienda</p>
      <div>
        <FiltroStore setFiltro={setFiltro} filtro={filtro} />
      </div>

      <div className={style.containCards}>
        {data.map((el: any, i: number) => (
          <CardProduct
          key={i}
            i={i}
            id={el._id}
            title={el.name}
            description={el.description}
            material={el.material}
            dimensions={el.dimensions}
            brand={el.brand}
            amount={el.amount}
            price={el.price}
            image={el.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
