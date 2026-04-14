import { type ChangeEvent } from "react";
import styles from "../styles/sortTabs.module.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleTransfer, toggleCompany } from "../../store/slice";

type Props = {
    className?: string;
}

export const SortTabs = ({className}: Props) => {
    const dispatch = useAppDispatch();
    const transfers = useAppSelector((state) => state.ticket.filters.transfers);
    const companies = useAppSelector((state) => state.ticket.filters.companies);

    const handleTransferChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(toggleTransfer(Number(event.target.value)));
    };

    const handleCompanyChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(toggleCompany(event.target.value));
    };

    return(

        <div className = { `${className} ${styles.sortTabs}` }>
            {/* чекбоксы должны реализовывать логику фильтрации по пересадкам и компаниям (параметр для выполнения логики берется из значения value) */}
            <div className = {styles.sort_tabs__transfer}>
                <h3>Количество пересадок</h3>
                <label>
                    <input type="checkbox" name="transfer" value = {0} checked={transfers.includes(0)} onChange={handleTransferChange}/>
                    <span>Без пересадок</span>
                </label>
                <label>
                    <input type="checkbox" name="transfer"  value={1} checked={transfers.includes(1)} onChange={handleTransferChange}/>
                    <span>1 пересадка</span>
                </label>
                <label>
                    <input type="checkbox" name="transfer" value={2} checked={transfers.includes(2)} onChange={handleTransferChange}/>
                    <span>2 пересадки</span>
                </label>
                <label>
                    <input type="checkbox" name="transfer" value={3} checked={transfers.includes(3)} onChange={handleTransferChange}/>
                    <span>3 пересадки</span>
                </label>
            </div>
            <div className = {styles.sort_tabs__company}>
                <h3>Компании</h3>
                <label>
                    <input type="checkbox" name="company" value={"Победа"} checked={companies.includes("Победа")} onChange={handleCompanyChange}/>
                    <span>Победа</span>
                </label>
                <label>
                    <input type="checkbox" name="company" value={"Red Wings"} checked={companies.includes("Red Wings")} onChange={handleCompanyChange}/>
                    <span>Red Wings</span>
                </label>
                <label>
                    <input type="checkbox" name="company" value={"S7 Airlines"} checked={companies.includes("S7 Airlines")} onChange={handleCompanyChange}/>
                    <span>S7 Airlines</span>
                </label>
                <label>
                    <input type="checkbox" name="company" value={"Аэрофлот"} checked={companies.includes("Аэрофлот")} onChange={handleCompanyChange}/>
                    <span>Аэрофлот</span>
                </label>
            </div>
        </div>
    );
}