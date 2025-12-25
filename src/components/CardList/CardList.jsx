import { dishes } from '@/assets/data/dishes.js';
import styles from './CardList.module.css';
import {Card} from "@/components/Card/Card.jsx";
import clsx from "clsx";

export const CardList = ({ sectionName }) => {

  // Соответствие между названиями секций и категориями блюд
  const sectionToCategory = {
    "Для обжорок": "Салаты",
    "Для дожорок": "Закуски",
    "Пузико набить": "Горячее",
    "Для сластён": "Десерты",
    "Хочу попить": "Прохладительные напитки",
    "А я накатить": "Алкоголь",
    "Чайник поставь": "Горячие напитки",
    "За зайку": "Собакам"
  };

  const category = sectionToCategory[sectionName];
  const filteredDishes = dishes.filter(dish => dish.category === category);

  return (
    <div className={clsx(styles.cardList)}>
      {filteredDishes.map(dish => (
        <Card
          key={dish.id}
          image={dish.image}
          name={dish.name}
        />
      ))}
    </div>
  );
};
