import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; 
import { useBasket } from '../../context/useContext';
import Logo from '../../assets/logo.png'
import BasketImg from '../../assets/basket.svg'

const Header = () => {
  const { t, i18n } = useTranslation();
  const { basketCount } = useBasket();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <div className="bg-black z-20 top-0 left-0 right-0 fixed w-full">
      <header className="max-w-[1200px] px-2 bg-black mx-auto py-4 flex items-center justify-between flex-wrap rounded-md ">
        <a href="/">
          <img
            src={Logo}
            alt="Company Logo"
            className="w-[60px] h-[60px] mr-[90px]"
          />
        </a>
        <nav className="flex flex-grow">
          <ul className="md:flex space-x-6 text-[gold] font-semibold hidden">
            <li className="hover:scale-110 transition border-black border hover:border-[gold] px-2 rounded-lg duration-300 cursor-pointer lobster text-[20px]">
              <a href="#about">{t("header.about")}</a>
            </li>
            <li className="hover:scale-110 transition border-black border hover:border-[gold] px-2 rounded-lg duration-300 cursor-pointer lobster text-[20px]">
              <a href="#products">{t("header.products")}</a>
            </li>
            
            <li className="hover:scale-110 transition border-black border hover:border-[gold] px-2 rounded-lg duration-300 cursor-pointer lobster text-[20px]">
              <a href="#contact">{t("header.contact")}</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-8 flex-wrap mt-2 md:mt-0">
          <div className="flex items-center gap-2 relative">
            <Link to="/basket"> 
              <img
                src={BasketImg}
                className="w-[20px] h-[20px] transition-transform hover:scale-110"
                alt="Shopping Basket"
              />
            </Link>
            <span className="text-black h-[20px] flex lobster items-center justify-center text-[12px] w-[20px] border border-black rounded-full absolute bg-[gold] bottom-3 left-3">{basketCount}</span>
          </div>

          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="outline-none lobster shadow-md shadow-[#ffd700] bg-black rounded-md p-2 text-[#ffd700]"
          >
            <option value="uz">UZ</option>
            <option value="ru">Ру</option>
          </select>
        </div>
      </header>
    </div>
  );
};

export default Header;
