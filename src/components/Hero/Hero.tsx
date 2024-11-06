import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import HeroImg from '../../assets/Black Forest Cake.png';
import Firstcake from '../../assets/cake_2.png'
import Logo from '../../assets/logo.png';
import HeroImg3 from '../../assets/Wedding Cake.png';
import '../../i18n';
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      className="bg bg-green text-[gold] flex"
    >
      {[HeroImg, Firstcake, HeroImg3].map((imgSrc, index) => (
        <SwiperSlide key={index}>
          <div className='w-full  md:max-w-[1200px] mx-auto h-auto flex flex-col md:flex-row items-center justify-between p-5'>
            <div className='w-full md:w-1/2 flex flex-col items-start p-5'>
              <div className='flex items-center gap-2 mt-5'>
                <h1 className='lobster text-[24px] md:text-[40px]'>Xan</h1>
                <img src={Logo} alt="Logo" className='w-[40px] h-[40px] md:w-[60px] md:h-[60px]' />
                <h1 className='lobster text-[24px] md:text-[40px]'>Cake</h1>
              </div>
              <h2 className='lobster text-[18px] md:text-[26px] mt-5'>{t("hero.title")}</h2>
              <p className='lobster text-[14px] md:text-[18px] mt-2 max-w-[400px] md:w-[480px]'>
                {t("hero.text")}
              </p>
            </div>
            <div className='w-full md:w-1/2 flex justify-center mt-5 md:mt-0'>
              <img 
                src={imgSrc} 
                alt={`Cake ${index + 1}`} 
                className='w-[250px] md:w-[500px] h-auto rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105' 
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Hero;
