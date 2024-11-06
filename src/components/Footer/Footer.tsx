import Instagram from "../../assets/instagram.svg";
import Telegram from '../../assets/telegram.svg';
import Location from '../../assets/location.svg';
import Group from '../../assets/group.svg'
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t, } = useTranslation();
  return (
    <footer id="contact" className="w-screen h-auto bg pt-[50px]">
  <div className="w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-[20px] md:gap-[85px] pb-[50px]">
    <div className="flex flex-col text-[gold] md:flex-1 contact-mobile ">
      <div data-aos="fade-right" className="flex flex-col relative">
        <h2 className="text-[36px] md:text-[48px] font-semibold text-center md:text-start">{t("Contact")}</h2>
      </div>
      <h3 className="mt-[35px] text-center md:text-start">{t("Contact")}:</h3>
      <a href="tel:+998935975577" className="text-center md:text-start">+998 93 597 55 77</a>
      <div className="flex gap-[20px] flex-col mt-[35px] text-center md:text-start">
        <h3>{t("Social media")}</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/xan__cake__/"
          className="flex gap-[5px] hover:text-[gold] mx-auto md:mx-0"
        >
          <img src={Instagram} alt="Instagram" className="w-[30px] h-[30px] " />
          xan__cake__
        </a>
          <div className="flex flex-col">
            <a target="_blank" className="flex gap-[5px] hover:text-[gold] mx-auto md:mx-0" rel="noopener noreferrer" href="https://t.me/Ataev_Bakhodir90">
            <img src={Telegram} alt="Telegram" className="w-[30px] h-[30px]" />
              t.me/Ataev_Bakhodir90
            </a>
        </div>
        <a
          href="https://t.me/easyvizatourconsulting"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[5px] mx-auto md:mx-0"
        >
          <img src={Group} alt="Group" className="w-[35px] h-[35px]" />
          Telegram
        </a>
        <div className="flex items-center gap-[5px] mx-auto md:mx-0">
          <img src={Location} alt="Location" className="pr-[5px] w-[35px] h-[35px]" />
          Tashkent, Mustaqillik 59.
        </div>
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
      <form  className="mt-[20px]">
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
            min={11}
            placeholder={t("Telephone")}
            className="h-[44px] caret-[gold] outline-none text-[gold] px-[20px] w-full rounded-md bg-black border border-[gold] placeholder:text-[gold]"
          />
          <textarea
            required
            placeholder={t("Comments")}
            name="comment"
            className="h-[175px] text-[gold] caret-[gold] outline-none pt-[10px] px-[20px] w-full rounded-md bg-black border border-[gold] placeholder:text-[gold]"
          />
          <button
            className="bg-[gold] border border-[gold] text-[black] lobster py-[10px] rounded-md"
            type="submit"
          >
            {t("request")}
          </button>
        </div>
      </form>
    </div>
  </div>
</footer>

  )
}

export default Footer