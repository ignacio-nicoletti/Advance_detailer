import Image from "next/image";
import { useState } from "react";
import style from "./Carousel.module.css";
import { FC } from "react";
import galeria from "../../assets/galeriaA.png";

interface CarouselProps {
  imagesImp: [];
  imagesGallery: [];
}

export const Carousel: FC<CarouselProps> = ({
  imagesImp,
  imagesGallery,
}: CarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [state, setState] = useState(false);

  const [activeViewImage, setActiveViewImage] = useState(false);

  const handlerClick = () => {
    setState(!state);

    setTimeout(() => {
      setActiveViewImage(!activeViewImage);
    }, 2000);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % imagesImp.length;
    setCurrentImageIndex(nextIndex);
  };

  const previousImage = () => {
    const previousIndex =
      (currentImageIndex - 1 + imagesImp.length) % imagesImp.length;
    setCurrentImageIndex(previousIndex);
  };

  let clase;
  if (state === false) {
    clase = style.galeryInactive;
  } else {
    clase = style.galeryActive;
  }

  return (
    <>
      <div className={style.carousel}>
        <div className={style.currentImage}>
          <Image
            src={imagesImp[currentImageIndex]}
            alt="carousel current slide"
            width={200}
            height={200}
            style={{ borderRadius: "10px" }}
          />
        </div>
        <button className={style.previousButton} onClick={previousImage}>
          ◀
        </button>
        <button className={style.nextButton} onClick={nextImage}>
          ▶
        </button>
      </div>

      <div className={style.fotos}>
        <div className={clase}>
          {state === true
            ? imagesGallery.map((e) => (
                <div className={style.photo} key={e}>
                  {activeViewImage === true ? (
                    <Image
                      src={e}
                      alt="carousel current slide"
                      width={100}
                      height={100}
                      style={{ borderRadius: "5px" }}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))
            : ""}
        </div>
        <div className={style.containFlecha}>
          <div className={style.flecha}>
            <Image
              src={galeria}
              alt="carousel current slide"
              width={25}
              height={25}
              style={{ borderRadius: "5px" }}
              onClick={handlerClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};
