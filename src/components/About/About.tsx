import { useTranslation } from 'react-i18next';
import Cake from '../../assets/Icons/Icon 01.svg';
import Delivery from '../../assets/delivery.svg';
import Small from '../../assets/small_cake.png';
import Time from '../../assets/time.svg';
import Cheap from '../../assets/cheap.svg';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg text-[gold] bg-fixed bg-cover bg-center lobster py-10" id='about'>
      <h2 className="text-center lobster text-[40px] tracking-wider mb-8">{t('about.title')}</h2>
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row  justify-between items-center gap-8 px-5">
        <div className="flex justify-center w-full lg:w-1/2 lg:order-first">
          <img src={Small} alt="small_cake" className='max-w-full  mb-8 hover:scale-105 duration-300' />
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <div className="flex items-center gap-3 bg-black mb-4 p-4 border border-[gold] rounded-lg shadow-lg">
            <img src={Cake} alt="Sifatli mahsulotlar" className='w-[60px] h-[60px]' />
            <div className='flex flex-col'>
              <h3 className="text-[30px]">{t('about.qualityProducts')}</h3>
              <p>{t('about.qualityProductsDescription')}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-black mb-4 p-4 border border-[gold] rounded-lg shadow-lg">
            <img src={Delivery} alt="Yetkazib berish" className='w-[60px] h-[60px]' />
            <div className='flex flex-col'>
              <h3 className="text-[30px]">{t('about.delivery')}</h3>
              <p>{t('about.deliveryDescription')}</p>
            </div>
          </div>
          <div className="flex items-center bg-black gap-3 mb-4 p-4 border border-[gold] rounded-lg shadow-lg">
            <img src={Time} alt="7 Yillik Tajriba" className='w-[60px] h-[60px]' />
            <div className='flex flex-col'>
              <h3 className="text-[30px]">{t('about.experience')}</h3>
              <p>{t('about.experienceDescription')}</p>
            </div>
          </div>
          <div className="flex bg-black items-center gap-3 mb-4 p-4 border border-[gold] rounded-lg shadow-lg">
            <img src={Cheap} alt="Hamyonbop Narxlar" className='w-[60px] h-[60px]' />
            <div className='flex flex-col'>
              <h3 className="text-[26px]">{t('about.affordablePrices')}</h3>
              <p>{t('about.affordablePricesDescription')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
