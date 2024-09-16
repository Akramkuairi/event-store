import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";
import { Link } from "react-router-dom";
import { party } from "../../public/resources/resources";

import { useTranslation } from "react-i18next";
export const HeaderOHome = ({ image, name, id, description, price }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-secondaryBg text-center sm:text-start rounded-3xl h-full  max-w-screen-xl px-4 py-8 mx-auto   lg:py-16   sm:ps-16  ">
      <h1 className=" mb-4 text-navyLogo  text-4xl text-center font-extrabold  md:text-4xl xl:text-5xl ">
        <span className="flex flex-col sm:flex-row items-center justify-center sm:items-center">
          {t("header.title")}{" "}
          <img
            src={party}
            alt="This is an animated gif image, but it does not move"
            className="ms-3 w-14"
           />
        </span>
        <br />
        <span className="text-orangeLogo text-2xl text-center  inline-block ">
          {t("header.websiteName")}
        </span>
      </h1>
      <hr />
      <p className="font-light text-center  md:text-lg lg:text-xl  text-navyLogo">
        {t("header.paragraph")}
      </p>

      <div className="flex flex-col-reverse md:flex-row ">
        <div className="mr-auto place-self-center  w-full ">
          <h1 className="max-w-2xl mb-4  text-2xl font-extrabold  md:text-4xl xl:text-5xl ">
            <span className=" text-xl inline-block mt-10 text-cyanLogo">
              {t("header.product")} #{id > 9 ? id : `0${id}`}
            </span>
            <br />
            <span className="text-orangeLogo   inline-block mt-1">{t(`products.#${id}.name`)}</span>
          </h1>
          <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-navyLogo">
             {t(`products.#${id}.description`)}
          </p>
          <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 space-x-0 sm:space-x-5">
            <Link
              to={`/checkout/${name}/${price}/${id}`}
              className=" text-primaryText transition-all text-lg flex justify-center rounded-md items-center group  pe-4  hover:border-orangeLogo hover:bg-orangeLogo rounded-s-full "
              onClick={() => {}}
            >
              <span className="bg-orangeLogo transition-all group-hover:bg-orangeLogo group-hover:translate-x-2 rounded-full text-gray-50 w-12 h-12 flex justify-center items-center text-3xl me-3 ">
                {" "}
                <BsArrowRight />
              </span>
              <span className="text-orangeLogo group-hover:text-gray-50 transition-all capitalize font-semibold">
                {t("header.order")}
              </span>
            </Link>
            <a
              href="#products"
              className=" text-navyLogo hover:bg-navyLogo transition-all text-lg flex justify-center rounded-md items-center group border pe-4 border-none hover:border-orangeLogo rounded-s-full"
              onClick={() => {}}
            >
              <span className="bg-navyLogo transition-all group-hover:bg-navyLogo group-hover:translate-x-2 rounded-full text-gray-50 w-12 h-12 flex justify-center items-center text-3xl me-3 ">
                {" "}
                <BsArrowRight />
              </span>
              <span className="group-hover:text-gray-50 text-navyLogo transition-all capitalize font-semibold">
                {" "}
                {t("header.all")}
              </span>
            </a>
          </div>
        </div>
        <div className="w-full ">
          <img
            src={image}
            className="max-h-[450px] w-[150px] md:w-3/4 mx-auto object-contain"
            title={name}
            alt={description}
          />
        </div>
      </div>
    </div>
  );
};
