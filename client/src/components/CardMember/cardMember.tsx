import { FC } from "react";
import { useRouter } from "next/router";
import style from "./cardMember.module.css";
import Image from "next/image";
import prueba from "../../assets/pulidora2.jpeg";

export const CardMember: FC = () => {
  return (
    <div className={style.container}>
      <div className={style.cards}>
        <div className={style.card}>
          <h6 className={style.cardTitle}>Jonathan Di Santo</h6>
          <div className={style.img}>
            <Image src={prueba} height={300} alt="" style={{ width: "100%" }} />
          </div>
          <p className={style.cardDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quae
            nam recusandae soluta voluptatibus quis suscipit, asperiores,
            sapiente voluptas officia ab laborum, ipsum consectetur eligendi
            similique sed in veritatis nobis.
          </p>
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.card}>
          <h6 className={style.cardTitle}>Ignacio nicoletti</h6>
          <div className={style.img}>
            <Image src={prueba} height={300} alt="" style={{ width: "100%" }} />
          </div>
          <p className={style.cardDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quae
            nam recusandae soluta voluptatibus quis suscipit, asperiores,
            sapiente voluptas officia ab laborum, ipsum consectetur eligendi
            similique sed in veritatis nobis.
          </p>
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.card}>
          <h6 className={style.cardTitle}>Jonathan Di Santo</h6>
          <div className={style.img}>
            <Image src={prueba} height={300} alt="" style={{ width: "100%" }} />
          </div>
          <p className={style.cardDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quae
            nam recusandae soluta voluptatibus quis suscipit, asperiores,
            sapiente voluptas officia ab laborum, ipsum consectetur eligendi
            similique sed in veritatis nobis.
          </p>
        </div>
      </div>
    </div>
  );
};
