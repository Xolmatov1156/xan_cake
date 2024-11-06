import { useTranslation } from "react-i18next";
import Chocolate from "../../assets/Chocolate Cake.png";
import Basket from "../../assets/basket.svg";
import Happy from "../../assets/Happy Birthday Icing Cake.png";
import Wedding from "../../assets/Wedding Cake.png";
import Forest from "../../assets/Black Forest Cake.png";
import { useBasket } from "../../context/useContext";
import { useState, useEffect } from "react";
import Category1 from "../../assets/Icons/Icon 01.svg";
import Category2 from "../../assets/category_2.svg";
import BigCake1 from "../../assets/big_cake_1.jpeg";
import BigCake2 from "../../assets/big_cake_2.jpeg";
import BigCake3 from "../../assets/big_cake_3.jpeg";
import BigCake4 from "../../assets/big_cake_4.jpeg";
import BigCake5 from "../../assets/big_cake_5.jpeg";
import Sweets1 from "../../assets/sweets_1.jpg";
import Sweets2 from "../../assets/sweets_2.jpg";
import Sweets3 from "../../assets/sweets_3.jpg";
import Sweets4 from "../../assets/sweets_4.jpeg";
import Sweets5 from "../../assets/sweets_5.jpeg";
import Sweets6 from "../../assets/sweets_6.jpeg";
import Category3 from '../../assets/sweet.svg';

const Products = () => {
  const { t } = useTranslation();
  const { addToBasket, basketItems } = useBasket();
  const [addedItems, setAddedItems] = useState<{ [key: number]: boolean }>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("chocolate");

  const products = [
    {
      id: 1,
      image: Chocolate,
      name: t("products.chocolateCakeTitle"),
      price: 200000, 
      category: "chocolate",
    },
    {
      id: 2,
      image: Happy,
      name: t("products.happyBirthdayCakeTitle"),
      price: 250000, 
      category: "chocolate",
    },
    {
      id: 3,
      image: Wedding,
      name: t("products.weddingCakeTitle"),
      price: 220000, 
      category: "chocolate",
    },
    {
      id: 4,
      image: Forest,
      name: t("products.blackForestCakeTitle"),
      price: 300000, 
      category: "chocolate",
    },
    {
      id: 5,
      image: Chocolate,
      name: t("products.chocolateCakeTitle"),
      price: 180000, 
      category: "chocolate",
    },
    {
      id: 6,
      image: Happy,
      name: t("products.happyBirthdayCakeTitle"),
      price: 250000, 
      category: "chocolate",
    },
    {
      id: 7,
      image: Wedding,
      name: t("products.weddingCakeTitle"),
      price: 230000, 
      category: "chocolate",
    },
    {
      id: 8,
      image: Forest,
      name: t("products.blackForestCakeTitle"),
      price: 280000, 
      category: "chocolate",
    },
    {
      id: 9,
      image: BigCake1,
      name: t("bigcake"),
      price: 350000, 
      category: "birthday",
    },
    {
      id: 10,
      image: BigCake2,
      name: t("bigcake"),
      price: 300000, 
      category: "birthday",
    },
    {
      id: 11,
      image: BigCake3,
      name: t("bigcake"),
      price: 400000, 
      category: "birthday",
    },
    {
      id: 12,
      image: BigCake4,
      name: t("bigcake"),
      price: 450000, 
      category: "birthday",
    },
    {
      id: 13,
      image: BigCake5,
      name: t("bigcake"),
      price: 500000, 
      category: "birthday",
    },
    {
      id: 14,
      image: Sweets1,
      name: t("sweets"),
      price: 150000, 
      category: "wedding",
    },
    {
      id: 15,
      image: Sweets2,
      name: t("sweets"),
      price: 120000, 
      category: "wedding",
    },
    {
      id: 16,
      image: Sweets3,
      name: t("sweets"),
      price: 130000, 
      category: "wedding",
    },
    {
      id: 17,
      image: Sweets4,
      name: t("sweets"),
      price: 140000, 
      category: "wedding",
    },
    {
      id: 18,
      image: Sweets5,
      name: t("sweets"),
      price: 160000, 
      category: "wedding",
    },
    {
      id: 19,
      image: Sweets6,
      name: t("sweets"),
      price: 170000, 
      category: "wedding",
    },
  ];
  
  

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  useEffect(() => {
    const savedAddedItems = sessionStorage.getItem("addedItems");
    if (savedAddedItems) {
      setAddedItems(JSON.parse(savedAddedItems));
    }
  }, []);

  useEffect(() => {
    const updatedAddedItems = products.reduce((acc, product) => {
      acc[product.id] = basketItems.some((item) => item.id === product.id);
      return acc;
    }, {} as { [key: number]: boolean });

    setAddedItems(updatedAddedItems);
    sessionStorage.setItem("addedItems", JSON.stringify(updatedAddedItems));
  }, [basketItems]);

  const handleAddToBasket = (
    id: number,
    name: string,
    price: number,
    image: string
  ) => {
    if (!addedItems[id]) {
      addToBasket({ id, name, price, image });
      const updatedAddedItems = { ...addedItems, [id]: true };
      setAddedItems(updatedAddedItems);
      sessionStorage.setItem("addedItems", JSON.stringify(updatedAddedItems));
    }
  };

  return (
    <section
  className="bg text-[#ffd700] bg-fixed bg-cover bg-center"
  id="products"
>
  <h2 className="text-center lobster text-[40px] tracking-wider mb-8">
    {t("products.title")}
  </h2>
  <div className="flex justify-center items-center gap-4 max-w-[1200px] mx-auto">
    <button
      onClick={() => setSelectedCategory("chocolate")}
      className={`mb-[30px] relative border hover:scale-110 duration-300 border-[gold] rounded-full p-4 ${
        selectedCategory === "chocolate" ? "shadow-md shadow-[#ffd700]" : ""
      }`}
    >
      <img src={Category1} alt="chocolate" className="h-[40px] w-[40px]" />
      <p className="absolute top-[80px] left-0 right-0 text-[10px]">{t('round')}</p>
    </button>

    <button
      onClick={() => setSelectedCategory("birthday")}
      className={`mb-[30px] border relative border-[gold] hover:scale-110 duration-300 rounded-full p-4 ${
        selectedCategory === "birthday" ? "shadow-md shadow-[#ffd700]" : ""
      }`}
    >
      <img src={Category2} alt="birthday" className="h-[40px] w-[40px]" />
      <p className="absolute top-[80px] left-0 right-0 text-[10px]">{t('big')}</p>
    </button>
    <button
      onClick={() => setSelectedCategory("wedding")}
      className={`mb-[30px] border relative hover:scale-110 duration-300 border-[gold] rounded-full p-4 ${
        selectedCategory === "wedding" ? "shadow-md shadow-[#ffd700]" : ""
      }`}
    >
      <img src={Category3} alt="wedding" className="h-[40px] w-[40px]" />
      <p className="absolute top-[80px] left-0 right-0 text-[10px]">{t('sweet')}</p>
    </button>
  </div>
  <div className="max-w-[1200px] mx-auto pb-[90px] grid gap-[20px] px-[10px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
    {filteredProducts.map((product) => (
      <div
        key={product.id}
        className="w-full mt-[20px] rounded-[20px] flex flex-col shadow-md hover:scale-105 duration-300 bg-black border border-[gold]"
      >
        <img
          src={product.image}
          alt={product.name}
          className={`md:h-[180px] h-[100px] max-w-[90%] mx-auto mt-[10px] ${
            selectedCategory === "birthday" ||
            selectedCategory === "wedding"
              ? "rounded-[15px] scale-x-125"
              : "rounded-[20px] object-contain"
          } ${
            product.category === "wedding" &&
            product.id >= 14 &&
            product.id <= 17
              ? "scale-x-150"
              : ""
          }`}
        />
        <h3 className="mb-2 text-[18px] md:text-[20px] lobster pl-[20px]">
          {product.name}
        </h3>
        <p className="text-[12px] md:text-[16px] px-[20px]">
          {t("products.cakeDescription")}
        </p>
        <div className="flex mt-3 justify-around pb-[10px] pr-[15px] items-center">
          <p className="text-center">
            <span className="text-[14px] md:text-[20px] lobster">
              {t("products.price", { price: product.price })}
            </span>{" "}
            {t("products.currency")}
          </p>
          <button
            onClick={() =>
              handleAddToBasket(
                product.id,
                product.name,
                product.price,
                product.image
              )
            }
            className={`border border-[gold] h-[40px] w-[40px] flex justify-center items-center rounded-full transition-opacity duration-300 
              ${
                addedItems[product.id]
                  ? "opacity-50 cursor-not-allowed bg-gray-600"
                  : "bg-black text-[gold]"
              }`}
            disabled={addedItems[product.id]}
          >
            <img src={Basket} alt="basket" className="w-[20px] h-[20px]" />
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default Products;
