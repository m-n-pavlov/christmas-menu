import clsx from "clsx";
import styles from './Section.module.css';
import {CardList} from "@/components/CardList/CardList.jsx";

export const Section = ({ name }) => {
  return (
    <div className={clsx(styles.section)}>
      <div className={clsx(styles.divider)}></div> {/* разделитель */}
      <p className={clsx(styles.header)}>{name}</p> {/* заголовок секции */}
      <CardList sectionName={name} /> {/* передаем название секции в CardList */}
    </div>
  )
}
