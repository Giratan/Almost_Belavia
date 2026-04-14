import { urls } from "../../data/bundle_of_elements.";
import type { Ticket } from "../../data/types";
import styles from "../styles/ticketCard.module.css";

interface TicketCardProps {
    data: Ticket;
}

export const TicketCard = ({ data }: TicketCardProps) => {
    const transfers = data.connectionAmount ?? 0;
    const transferLabel =
        transfers === 0
            ? "Без пересадок"
            : transfers === 1
            ? "Пересадка"
            : "Пересадки";

    const companyImageUrl = urls.find((item) => item.company_name === data.company)?.url;

    return (
        <div className={styles.ticket_card}>
            <div className={styles.ticket_card__header}>
                <h2>
                    {data.price} {data.currency}
                </h2>
                {companyImageUrl && (
                    <img
                        src={companyImageUrl}
                        alt={data.company}
                        className={styles.ticket_card__image}
                    />
                )}
            </div>

            <div className={styles.ticket_card__body}>
                <div className={styles.ticket_card__body__info}>
                    <p>
                        {data.from} - {data.to}
                    </p>
                    <span>
                        {data.time.startTime} - {data.time.endTime}
                    </span>
                </div>

                <div className={styles.ticket_card__body__duration}>
                    <p>В пути</p>
                    <span>
                        {Math.floor(data.duration / 60)} ч {data.duration % 60} мин
                    </span>
                </div>

                <div className={styles.ticket_card__body__transfer}>
                    <p>Пересадки</p>
                    <span>
                        {transfers} {transferLabel}
                    </span>
                </div>
            </div>
        </div>
    );
};
