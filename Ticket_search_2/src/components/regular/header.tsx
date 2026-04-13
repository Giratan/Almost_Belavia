import Main_Icon from "../../icons/regular/main_icon.svg";
import styles from "../styles/header.module.css";


export const Header = () => {
    return (
        <header className = {styles.header}>
            <img
            src = {Main_Icon}
            alt="main_icon"
            className = {styles.header__icon}
            />
            <h1 className = {styles.header__title}>Поиск билетов</h1>
        </header>
    );
};