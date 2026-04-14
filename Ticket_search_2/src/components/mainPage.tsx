import { useEffect, useState } from "react";
import { SortTabs } from "./regular/sortTabs";
import { useWindowWidth } from "../custom/useWindowWidth";
import { Assortment } from "./regular/assortment";
import { LoadMoreButton } from "./regular/loadMoreButton";
import { TicketCard } from "./reusable/ticketCard";
import Arrow from "../icons/regular/arrow.svg";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchTickets } from "../store/slice";
import { selectFilteredTickets } from "../store/selectFilteredTickets";
import { selectFiltersText } from "../store/selectFiltersText";
import styles from "./styles/mainPage.module.css";

export const MainPage = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const width = useWindowWidth();
    const dispatch = useAppDispatch();
    const tickets = useAppSelector(selectFilteredTickets);
    const status = useAppSelector((state) => state.ticket.status);
    const error = useAppSelector((state) => state.ticket.error);
    const visibleCount = useAppSelector((state) => state.ticket.visibleCount);
    const displayedTickets = tickets.slice(0, visibleCount);
    const filtersText = useAppSelector(selectFiltersText);

    useEffect(() => {
        dispatch(fetchTickets());
    }, [dispatch]);

    const handleToggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <div className={styles.mainPageContainer}>
            

            {width > 768 && (
                <div className={styles.settings_menu__left}>
                    <SortTabs className="styles.sort_tabs_desktop" />
                </div>
            )}

            <div className={styles.focal_section}>
                <Assortment />

                {width <= 768 && (
                    <div className={styles.settings_menu__dropdown}>
                        <div className={styles.settings_menu__dropdown_header}>
                            <span className={styles.dropdown_display}>{filtersText}</span>

                            <div className={styles.dropdown_display__button_place}>
                                <button onClick={handleToggleDropdown}>
                                    <span>Открыть настройки</span>
                                    <img src={Arrow} alt="Показать фильтры" />
                                </button>
                            </div>
                        </div>

                        {isDropdownOpen && <SortTabs className={styles.sort_tabs_mobile} />}
                    </div>
                )}

                <div className={styles.ticket_list}>
                    {status === "loading" ? (
                        <p>Загрузка билетов...</p>
                    ) : status === "failed" ? (
                        <p>{error ?? "Ошибка загрузки билетов"}</p>
                    ) : displayedTickets.length === 0 ? (
                        <p>Билеты не найдены</p>
                    ) : (
                        displayedTickets.map((ticket) => (
                            <TicketCard key={ticket.id} data={ticket} />
                        ))
                    )}
                </div>

                <LoadMoreButton />
            </div>
        </div>
    );
}
