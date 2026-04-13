import styles from "../styles/assortment.module.css";


export const Assortment = () => {


    return (
        <div className = {styles.assortment_buttons__group}>
            <button 
            className = {styles.button_price}
            type = "button"
            
            >Самый дешевый</button>
            <button 
            className = {styles.button_speed}
            type = "button"
            
            >Самый быстрый</button>
            <button 
            className ={styles.button_optimal}
            type = "button"
            >Самый оптимальный</button>
        </div>
    );
};