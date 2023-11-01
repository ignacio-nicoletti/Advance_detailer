import { RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";
import style from "./filtroStore.module.css";

const FiltroStore = ({ setFiltro, filtro }: any) => {
  const optionPrice = ["Precio mas alto", "Precio mas bajo"];

  const info = useSelector((state: RootState) => state.product.products);

  let filter = info.map((el: any) => el.brand);

  let uniqueFilter = filter.filter(
    (value: string, index: number, self: any) => {
      return self.indexOf(value) === index;
    }
  );

  const handlerChange = (e: any) => {
    if (e.precio && e.precio == "Precio mas alto") {
      setFiltro({ ...filtro, precio: "alto" });
    } else if (e.precio && e.precio == "Precio mas bajo") {
      setFiltro({ ...filtro, precio: "bajo" });
    } else {
      setFiltro({ ...filtro, precio: "aleatorio" });
    }
    if (e.marca) {
      setFiltro({ ...filtro, brand: e.marca });
    }
  };

  return (
    <div className={style.ContainFiltro}>
      <div>
        <select
          name="marca"
          onChange={(e) => handlerChange({ marca: e.target.value })}
          className={style.select}
        >
          <option
            value="todo"
            style={{
              textAlign: "center",
              backgroundColor: "black",
              color: "#f1d518",
            }}
          >
            Marcas
          </option>
          {uniqueFilter.map((e: string, index: number) => (
            <option value={e} className={style.op} key={index}>
              {e}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          name="precio"
          onChange={(e) => handlerChange({ precio: e.target.value })}
          className={style.select}
        >
          <option value="aleatorio" style={{ textAlign: "center" }}>
            Precios
          </option>
          {optionPrice.map((e: string, index: number) => (
            <option value={e} key={index}>
              {e}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default FiltroStore;
