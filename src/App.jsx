/* Подключение CSS-стилей layout всего приложения и контентной части */
import './App.css';
import {Header} from "@/components/Header/Header.jsx";
import {Section} from "@/components/Section/Section.jsx";
import ScrollToTopButton from "@/components/ArrowUpIcon/ArrowUpIcon.jsx";
import Snow from "@/components/SnowContainer/Snow.jsx";

export const App = () => {

  const sections = [
    "Для обжорок",
    "Для дожорок",
    "Пузико набить",
    "Для сластён",
    "Хочу попить",
    "А я накатить",
    "Чайник поставь",
    "За зайку"
  ];

  return (
    <div className="page">
      <Snow />
      <Header />
      <main className="content">
        {/* Нужно использовать map для рендеринга всех секций */}
        {sections.map((sectionName) => (
          <Section key={sectionName} name={sectionName} />
        ))}
      </main>
      <ScrollToTopButton />
    </div>
  );
};
