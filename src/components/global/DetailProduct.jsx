import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";
import { IoMdCheckmarkCircle } from "@react-icons/all-files/io/IoMdCheckmarkCircle";
import { OrdersForm } from "../../forms/OrdersForm";
import { Link } from "react-router-dom";
import { t } from "i18next";

export const DetailProduct = ({
  name,
  description,
  features,
  id,
  price,
  image,
  setCheckout,
  home,
}) => {
  //to={`/checkout/${name}/${price}/${id}`}

  return (
    <div className=" px-0  md:px-12 lg:px-24 xl:px-32 sticky up top-10">
      <div className="flex sm:justify-between items-center sm:items-start  flex-col sm:flex-row">
        <div className="">
          <h2 className="mb-1  text-2xl font-bold  md:text-3xl xl:text-4xl capitalize text-orangeLogo  ">
            {name}
          </h2>
        </div>
        <div className="button">
          {home == true ? (
            <button
              onClick={() => {
                setCheckout((prev) => !prev);
              }}
              type="button"
              className=" text-primaryText transition-all text-lg flex justify-center rounded-md items-center group  pe-4  hover:border-orangeLogo bg-orangeLogo rounded-s-full "
            >
              <span className="bg-orangeLogo transition-all group-hover:bg-orangeLogo group-hover:translate-x-2 rounded-full text-gray-50 w-12 h-12 flex justify-center items-center text-3xl me-3 ">
                {" "}
                <BsArrowRight />
              </span>
              <span className="text-gray-50 transition-all capitalize font-semibold">
                {t("product-section.Order Now")}
              </span>
            </button>
          ) : (
            <Link
              to={`/checkout/${name}/${price}/${id}`}
              type="button"
              className=" text-primaryText transition-all text-lg flex justify-center rounded-md items-center group  pe-4  hover:border-orangeLogo bg-orangeLogo rounded-s-full "
            >
              <span className="bg-orangeLogo transition-all group-hover:bg-orangeLogo group-hover:translate-x-2 rounded-full text-gray-50 w-12 h-12 flex justify-center items-center text-3xl me-3 ">
                {" "}
                <BsArrowRight />
              </span>
              <span className="text-gray-50 transition-all capitalize font-semibold">
                {t("product-section.Order Now")}
              </span>
            </Link>
          )}

          <div className="bg-gray-100  px-5 py-2 font-bold  rounded-lg capitalize text-center mt-2 ">
            <p className="flex justify-between text-xl items-center text-navyLogo">
              <span className="rounded-lg capitalize text-center text-sm  text-redLogo">
                {t("product-section.Price")}:
              </span>
              {price} € pro tag
            </p>
          </div>
        </div>
      </div>
      <div className="px-2 mt-5 ">
        <img
          src={image}
          className="w-[350px] h-[350px] object-contain  mx-auto rounded-lg "
          alt={description}
          title={description}
        />
        <p className="mb-1  text-md font-normal capitalize mt-5 text-redLogo text-center">
          {description}
        </p>
        <ul className="flex flex-wrap justify-between item-center">
          {features?.map((el, i) => {
            return (
              <li
                key={i}
                className="w-full flex  items-center mt-3 text-md space-x-3 "
              >
                <span className="text-yellowLogo bg-[#f1e8d0] p-3  rounded-full">
                  <IoMdCheckmarkCircle />
                </span>
                <span className="text-navyLogo">{el}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export const DetailProductSkeleton = () => {
  return (
    <div className=" sm:px-32 sticky top-10 DetailProductSkeleton animate-pulse">
      <div className="flex sm:justify-between items-center flex-col sm:flex-row">
        <div className="w-auto">
          <div className="h-4 w-52 bg-slate-200 rounded "></div>
          <div className="h-2 w-52 bg-slate-200 mt-5 rounded"></div>
        </div>
        <div className="button">
          <div className="h-4 w-24 bg-slate-200 rounded "></div>
          <div className="bg-gray-100   font-bold  rounded-lg capitalize text-center mt-2 ">
            <p className="flex justify-between text-xl items-center ">
              <div className="h-4 w-24 bg-slate-200 rounded "></div>
            </p>
          </div>
        </div>
      </div>
      <div className="px-2 mt-5 ">
        <div className="h-[300px] w-full   mx-auto rounded-lg bg-slate-200 "></div>
        <ul className="flex flex-wrap justify-between item-center">
          <li className="w-1/2 flex  items-center mt-3 text-md space-x-3 ">
            <span className="text-slate-600 bg-slate-200 p-2 rounded-full">
              <IoMdCheckmarkCircle />
            </span>
            <div className="h-4 w-52 bg-slate-200 rounded "></div>
          </li>
          <li className="w-1/2 flex  items-center mt-3 text-md space-x-3 ">
            <span className="text-slate-600 bg-slate-200 p-2 rounded-full">
              <IoMdCheckmarkCircle />
            </span>
            <div className="h-4 w-52 bg-slate-200 rounded "></div>
          </li>
          <li className="w-1/2 flex  items-center mt-3 text-md space-x-3 ">
            <span className="text-slate-600 bg-slate-200 p-2 rounded-full">
              <IoMdCheckmarkCircle />
            </span>
            <div className="h-4 w-52 bg-slate-200 rounded "></div>
          </li>
          <li className="w-1/2 flex  items-center mt-3 text-md space-x-3 ">
            <span className="text-slate-600 bg-slate-200 p-2 rounded-full">
              <IoMdCheckmarkCircle />
            </span>
            <div className="h-4 w-52 bg-slate-200 rounded "></div>
          </li>
          <li className="w-1/2 flex  items-center mt-3 text-md space-x-3 ">
            <span className="text-slate-600 bg-slate-200 p-2 rounded-full">
              <IoMdCheckmarkCircle />
            </span>
            <div className="h-4 w-52 bg-slate-200 rounded "></div>
          </li>
        </ul>
      </div>
    </div>
  );
};
