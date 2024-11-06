import { useBasket } from "../context/useContext";
import { useTranslation } from "react-i18next";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import BasketImg from "../assets/basket.svg";

const Basket = () => {
  const { t } = useTranslation();
  const { basketItems, removeFromBasket } = useBasket();
  const navigate = useNavigate();

  return (
    <section className="bg text-[gold] p-4 h-[170vh]">
      <button onClick={() => navigate(-1)} className="text-[gold] pl-[10px] text-[20px] absolute top-[38px] left-[20px] scale-125">
        <SlArrowLeft />
      </button>
      <img src={BasketImg} alt="basket" className="w-[50px] mx-auto h-[50px] mb-4 mt-2" />
      <div className="max-w-[1200px] mx-auto">
        {basketItems.length === 0 ? (
          <p className="text-center">{t('products.emptyBasket')}</p>
        ) : (
          <div className="max-w-[1200px] mx-auto pb-[90px] grid gap-[20px] px-[10px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {basketItems.map((item, index) => (
              <div key={index} className="w-full rounded-[20px] flex flex-col shadow-md hover:scale-105 duration-300 bg-black border border-[gold] px-[15px] pb-[10px] relative">
                <button 
                  className='absolute top-2 left-2 text-[gold]' 
                  onClick={() => removeFromBasket(item.id)}
                >
                  X
                </button>
                <img src={item.image} alt={item.name} className={`md:h-[180px] h-[100px] max-w-[90%] mx-auto mt-[10px] rounded-lg scale-x-110`} />
                <h3 className="mb-2 text-[16px] md:text-[20px] lobster">{item.name}</h3>
                <p className="text-[12px] md:text-[16px]">{t('products.cakeDescription')}</p>
                <p>
                  <span className="text-[14px] md:text-[20px] lobster">{item.price}</span> {t('products.currency')}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Basket;
