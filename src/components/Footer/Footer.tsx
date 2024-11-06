import Instagram from "../../assets/instagram.svg";
import Telegram from "../../assets/telegram.svg";
import Location from "../../assets/location.svg";
import Group from "../../assets/group.svg";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Footer = () => {
  const { t } = useTranslation();

  const sendMessage = async (e: any) => {
    e.preventDefault();
    const { name, phone, comment, product } = e.target.elements;

    const TOKEN = "7518121126:AAEbXnVT1vRJX2AdvVx_cBHKHx7PmIoOLic";
    const CHAT_ID = "-1002446413525";
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    const message = `
      <b>Yangi zakaz:</b>
      <b>Ism:</b> ${name.value}
      <b>Raqam:</b> ${phone.value}
      <b>Izoh:</b> ${comment.value}
      <b>Mahsulot:</b> ${product.value}
    `;

    try {
      await axios.post(URL, {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML",
      });
      e.target.reset();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <footer id="contact" className="w-screen bg bg-fixed bg-cover bg-center">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[20px] md:gap-[85px] pb-[50px]">
        <div className="flex flex-col text-[gold] md:flex-1 contact-mobile">
          <h2
            className="text-[36px] md:text-[48px] font-semibold text-center md:text-start"
            data-aos="fade-right"
          >
            {t("Contact")}
          </h2>
          <h3 className="mt-[35px] text-center md:text-start">
            {t("Contact")}:
          </h3>
          <a href="tel:+998957975544" className="text-center md:text-start">
            +998 95 797 55 44
          </a>

          <div className="flex gap-[20px] flex-col mt-[35px] text-center md:text-start">
            <h3>{t("Social media")}</h3>
            <a
              href="https://www.instagram.com/xan__cake__/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-[5px] hover:text-[gold] mx-auto md:mx-0"
            >
              <img
                src={Instagram}
                alt="Instagram"
                className="w-[30px] h-[30px]"
              />
              xan__cake__
            </a>
            <a
              href="https://t.me/beka5544"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-[5px] hover:text-[gold] mx-auto md:mx-0"
            >
              <img
                src={Telegram}
                alt="Telegram"
                className="w-[30px] h-[30px]"
              />
              t.me/Beka5544
            </a>
            <a
              href="https://t.me/beka5544"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[5px] mx-auto md:mx-0"
            >
              <img src={Group} alt="Group" className="w-[35px] h-[35px]" />
              Telegram
            </a>
            <a
              href="https://yandex.uz/maps/org/xan_cake/241568712814/?ll=69.167061%2C41.347919&z=16.85"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[5px] mx-auto md:mx-0"
            >
              <img
                src={Location}
                alt="Location"
                className="w-[35px] h-[35px]"
              />
              <p className="text-[12px] scale-105">{t("location")}</p>
            </a>
          </div>
        </div>

        <div className="md:flex-1 contact-map">
          <iframe
            className="rounded-md w-full h-[300px] md:h-[500px] px-[15px] md:px-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.12897814137!2d69.67134522515748!3d41.151268931814066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afb2d4577a4a75%3A0x79d9d2c0e3535831!2z0YPQuy4g0JzRg9GB0YLQsNC60LjQu9C70LjQuiA1OSwgMTEwMjI2LCDQmtGA0LDRgdC90L7Qs9C-0YDRgdC6LCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1728709767193!5m2!1sru!2s"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="md:flex-1">
          <h2 className="text-[32px] md:text-[38px] text-[gold] font-semibold text-center">
            {t("submit")}
          </h2>
          <form onSubmit={sendMessage} className="mt-[20px]">
            <div className="flex flex-col gap-[24px] w-[350px] mx-auto">
              <input
                type="text"
                required
                name="name"
                placeholder={t("Name")}
                className="h-[44px] text-[gold] caret-[gold] outline-none px-[20px] w-full rounded-md bg-black border border-[gold] placeholder:text-[gold]"
              />
              <input
                type="number"
                required
                name="phone"
                placeholder={t("Telephone")}
                className="h-[44px] caret-[gold] outline-none text-[gold] px-[20px] w-full rounded-md bg-black border border-[gold] placeholder:text-[gold]"
              />
              <select
                name="product"
                className="h-[44px] caret-[gold] outline-none text-[gold] px-[20px] w-full rounded-md bg-black border border-[gold] placeholder:text-[gold]"
                required
              >
                <option value="" disabled selected>
                  Mahsulot tanlang
                </option>
                <option value="Shokoladli Tort">Shokoladli Tort</option>
                <option value="Mevali Tort">Mevali Tort</option>
                <option value="Katta Shokoladli Tort">
                  Katta Shokoladli Tort
                </option>
                <option value="Katta Mevali Tort">Katta Mevali Tort</option>
              </select>

              <textarea
                required
                placeholder={t("Comments")}
                name="comment"
                className="h-[175px] text-[gold] caret-[gold] outline-none pt-[10px] px-[20px] w-full rounded-md bg-black border border-[gold] placeholder:text-[gold]"
              />
              <button
                className="bg-[gold] border border-[gold] text-[black] py-[10px] rounded-md"
                type="submit"
              >
                {t("request")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
