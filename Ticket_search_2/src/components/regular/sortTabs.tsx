import styles from "../styles/sortTabs.module.css";

type Props = {
    className?: string;
}

export const SortTabs = ({className}: Props) => {
    
    


    return(

        <div className = { className }>
            <div className = {styles.sort_tabs__transfer}>
                <h3>Количество пересадок</h3>
                <label>
                    <input type="checkbox" name="transfer" value = {0}/>
                    <span>Без пересадок</span>
                </label>
                <label>
                    <input type="checkbox" name="transfer"  value={1}/>
                    <span>1 пересадка</span>
                </label>
                <label>
                    <input type="checkbox" name="transfer" value={2}/>
                    <span>2 пересадки</span>
                </label>
                <label>
                    <input type="checkbox" name="transfer" value={3}/>
                    <span>3 пересадки</span>
                </label>
            </div>
            <div className = {styles.sort_tabs__company}>
                <h3>Компании</h3>
                <label>
                    <input type="checkbox" name="company" value={"Победа"}/>
                    <span>Победа</span>
                </label>
                <label>
                    <input type="checkbox" name="company" value={"Red Wings"}/>
                    <span>Red Wings</span>
                </label>
                <label>
                    <input type="checkbox" name="company" value={"S7 Airlines"}/>
                    <span>S7 Airlines</span>
                </label>
                <label>
                    <input type="checkbox" name="company" value={"Аэрофлот"}/>
                    <span>Аэрофлот</span>
                </label>
            </div>
        </div>
    );
}