import { urls } from "../../data/bundle_of_elements.";
import { type Ticket } from "../../data/types";
import styles from "../styles/ticketCard.module.css";
interface TicketCardProps {
    data: Ticket;
}

export const TiicketCard = ({data}: TicketCardProps) => {

    let transfers;

    if(data.connectionAmount === null) {
        transfers = 0;
    } else {
        transfers = data.connectionAmount;
    }

    const lexical_identifier = transfers == 0 ? 'Без пересадок' : transfers == 1 ? 'Пересадка' : transfers >= 2 ? 'Пересадки' : 'Пересадок';
    
    const company_name = data.company;

    const company_image_url = urls.find(url => url.company_name === company_name)?.url;

    return (
        <div className = {styles.ticket_card}>

            <div className = {styles.ticket_card__header}>
                <h2>{data.price} {data.currency}</h2>

                <img
                    src = {company_image_url}
                    alt="copany_image"
                    className = {styles.ticket_card__image}
                />
            </div>

            <div className = {styles.ticket_card__body}>
                <div className = {styles.ticket_card__body__info}>
                    <p>{data.from} - {data.to}</p>
                    <span>{data.time.startTime} - {data.time.endTime}</span>
                </div>

                <div className = {styles.ticket_card__body__duration}>
                    <p>В пути</p>
                    <span>{(data.duration)/60} ч {(data.duration)%60} мин</span>
                </div>

                <div className = {styles.ticket_card__body__transfer}>
                    <p>Пересадки</p>
                    <span>{data.connectionAmount} {lexical_identifier}</span>
                </div>
            </div>

        </div>
    );
}