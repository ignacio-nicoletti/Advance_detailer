import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { RootState } from "@/redux/store/store";
import { ProfileProps } from "@/types";
import Image from "next/image";
import { useSelector } from "react-redux";
import style from "./compras.module.css";

export default function Compras() {
  let carrito = useSelector((state: RootState) => state.profile.user.carrito);
  // let carritoinv = carrito.reverse();

  return (
    <div className={style.containCompras}>
      <Navbar />
      <div className={style.boxsContain}>
        {carrito.map((items: any, index: number) => (
          <div className={style.boxsPaymentContain} key={index}>
            {items.itemsComprados.map((el: any, index: number) => (
              <div className={style.boxpayment} key={index}>
                <Image
                  src={el.picture_url}
                  alt="photo product"
                  width={50}
                  height={100}
                  style={{ borderRadius: "10px", width: "15%" }}
                  quality={100}
                />

                <div className={style.detailProduct}>
                  <p className={style.title}>{el.title}</p>
                  <div className={style.price}>
                    <p>{el.quantity} x</p>
                    <p>${el.unit_price}</p>
                  </div>
                  <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
                    {items.entrega}
                  </p>
                </div>

                <div className={style.detailCard}>
                  <p>visa:***{items.dataCard.ultDigit}</p>
                  <p>{items.status_detail}</p>
                  <p>{items.fecha}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
