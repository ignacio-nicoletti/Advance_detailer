import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import Image from "next/image";
import style from "./trabajos.module.css";
import CounterGalleryRight from "@/components/counterGallery/counterGalleryRight";
import CounterGalleryLeft from "@/components/counterGallery/counterGalleryLeft";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store/store";
import { useEffect } from "react";
import { getJobs } from "@/redux/controllers/jobs";

export default function trabajos() {
  const dispatch = useDispatch<AppDispatch>();
  const info = useSelector((state: RootState) => state.jobs.jobs);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  let tratamientos = info.filter((el: any) => el.category == "tratamiento");
  let lavados = info.filter((el: any) => el.category == "lavado");
  let interiores = info.filter((el: any) => el.category == "interior");

  return (
    <div className={style.contain}>
      <Navbar />

     

      <div className={style.photoContain} style={{ paddingTop: "10%" }}>
        <p>Tratramientos</p>
        <div className={style.containbuttons}>
          <CounterGalleryLeft />
          <div className={style.photo}>
            {tratamientos.map((e: any,index:number) => (
              <div key={index}>
                <Image
                  src={e.Images}
                  alt={e.name}
                  width={100}
                  height={100}
                  style={{ borderRadius: "5px", width: "100%", height: "80%" }}
                  quality={100}
                />
              </div>
            ))}
          </div>
          <CounterGalleryRight />
        </div>
      </div>
      <div className={style.photoContain}>
        <p>Lavados</p>
        <div className={style.containbuttons}>
          <CounterGalleryLeft />
          <div className={style.photo}>
            {lavados.map((e: any,index:number) => (
              <div key={index}>
                <Image
                  src={e.Images}
                  width={100}
                  height={100}
                  alt={e.name}
                  style={{ borderRadius: "5px", width: "100%", height: "80%" }}
                  quality={100}
                />
              </div>
            ))}
          </div>
          <CounterGalleryRight />
        </div>
      </div>
      <div className={style.photoContain}>
        <p>Interiores</p>
        <div className={style.containbuttons}>
          <CounterGalleryLeft />
          <div className={style.photo}>
            {interiores.map((e: any,index:number) => (
              <div key={index}>
                <Image
                  src={e.Images}
                  width={100}
                  height={100}
                  alt={e.name}
                  style={{ borderRadius: "5px", width: "100%", height: "80%" }}
                  quality={100}
                />
              </div>
            ))}
          </div>
          <CounterGalleryRight />
        </div>
      </div>

      <Footer />
    </div>
  );
}
