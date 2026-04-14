import { useWindowWidth } from "../../custom/useWindowWidth";
import Main_Icon from "../../icons/regular/main_icon.svg";
import styles from "../styles/header.module.css";


export const Header = () => {
    const width = useWindowWidth();

    return (
        <header className = {styles.header}>
            <img
            src = {Main_Icon}
            alt="main_icon"
            className = {styles.header__icon}
            />
            <div>
                {width > 768 && <h2 className = {styles.header__title}>Поиск билетов</h2>}
            </div>
        </header>
    );
};