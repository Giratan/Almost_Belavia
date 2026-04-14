import styles from "../styles/assortment.module.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSort } from "../../store/slice";

export const Assortment = () => {
    const dispatch = useAppDispatch();
    const sort = useAppSelector((state) => state.ticket.sort);

    return (
        <div className={styles.assortment_buttons__group}>
            <button
                className={`${styles.button_price} ${sort === "price" ? styles.active : ""}`}
                type="button"
                onClick={() => dispatch(setSort("price"))}
            >
                Самый дешевый
            </button>
            <button
                className={`${styles.button_speed} ${sort === "speed" ? styles.active : ""}`}
                type="button"
                onClick={() => dispatch(setSort("speed"))}
            >
                Самый быстрый
            </button>
            <button
                className={`${styles.button_optimal} ${sort === "optimal" ? styles.active : ""}`}
                type="button"
                onClick={() => dispatch(setSort("optimal"))}
            >
                Самый оптимальный
            </button>
        </div>
    );
};
