import emailjs from "@emailjs/browser";
import { t } from "i18next";
import { toast } from "react-toastify";

export const OrdersForm = ({ name, id, price }) => {
  const handelFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("client-name"),
      email: formData.get("email"),
      phone: formData.get("Phone"),
      address: formData.get("address"),
      product: name,
      price: price,
      id: id,
    };

    emailjs
      .send("service_p3nsgtb", "template_2zx4v2o", data, {
        publicKey: "VJIPjbjniWZ32D9n5",
      })
      .then(
        () => {
          document.getElementById("orderForm").reset();
          toast.success(t("orderForm.successMessage"));
        },
        () => {
          toast.error(t("orderForm.errorMessage"));
        }
      );
  };

  return (
    <form id="orderForm" onSubmit={(e) => handelFormSubmit(e)}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="client-name"
            className=" block mb-2 text-sm font-medium text-redLogo"
          >
            {t("orderForm.fullName")}
          </label>
          <input
            type="text"
            name="client-name"
            id="client-name"
            className="shadow-sm bg-transparent border border-cyanLogo text-navyLogo text-sm rounded-lg  focus:border-redLogo focus:outline-redLogo focus:ring-redLogo focus:bg-primaryBg block w-full p-2.5 "
            placeholder="Type your Name"
            required="must Write"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="Phone"
            className=" block mb-2 text-sm font-medium text-redLogo"
          >
            {t("orderForm.phone")}
          </label>
          <input
            type="number"
            name="Phone"
            id="Phone"
            className="shadow-sm bg-transparent border border-cyanLogo text-navyLogo text-sm rounded-lg  focus:border-redLogo focus:outline-redLogo focus:ring-redLogo focus:bg-primaryBg block w-full p-2.5 "
            placeholder="Phone"
            required="must"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className=" block mb-2 text-sm font-medium text-redLogo"
          >
            {t("orderForm.email")}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="shadow-sm bg-transparent border border-cyanLogo text-navyLogo text-sm rounded-lg  focus:border-redLogo focus:outline-redLogo focus:ring-redLogo focus:bg-primaryBg block w-full p-2.5 "
            placeholder="email"
            required="must"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="address"
            className=" block mb-2 text-sm font-medium text-redLogo"
          >
            {t("orderForm.address")}
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="shadow-sm bg-transparent border border-cyanLogo text-navyLogo text-sm rounded-lg  focus:border-redLogo focus:outline-redLogo focus:ring-redLogo focus:bg-primaryBg block w-full p-2.5 "
            placeholder="address"
            required="must"
          />
        </div>
        <div className="">
          <h3 className="text-orangeLogo text-lg">
            {t("orderForm.yourOrder")}:
          </h3>
          <h4 className="text-navyLogo">
            <span className="text-orangeLogo opacity-65 ,fs-5 ">
              {t("orderForm.productName")}
            </span>{" "}
            : {name}
          </h4>
          <h4 className="text-navyLogo">
            <span className="text-orangeLogo opacity-65">
              {t("orderForm.productId")}
            </span>{" "}
            : {id}
          </h4>
          <h4 className="text-navyLogo">
            <span className="text-orangeLogo opacity-65">
              {t("orderForm.productPrice")}
            </span>{" "} 
            :  {price }
          </h4>
        </div>

        <button
          type="submit"
          className="py-3 px-12 sm:col-span-2 mt-10 text-sm font-medium text-center text-white rounded-lg bg-redLogo  hover:bg-orangeLogo focus:ring-4 focus:outline-none focus:ring-orangeLogo "
        >
          {t("orderForm.submit")}
        </button>
      </div>
    </form>
  );
};
