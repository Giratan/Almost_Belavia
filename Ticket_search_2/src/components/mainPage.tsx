import { SortTabs } from "./regular/sortTabs";
import { useWindowWidth } from "../custom/useWindowWidth";
import { Assortment } from "./regular/assortment";
import { LoadMoreButton } from "./regular/loadMoreButton";

import Arrow from "../icons/regular/arrow.svg";

import { useState } from "react";


export const MainPage = () => {

    const [isDropdownOpen, setisDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setisDropdownOpen(!isDropdownOpen);
    };

    const width = useWindowWidth();

    return (
        <div>
            
            {/*mobile*/}
            {width <= 768 && (<SortTabs className = "styles.sort_tabs_mobile" />)}
            

            <div className = "settings_menu__left">

                {/*desktop*/}
                {width > 768 && (<SortTabs className = "styles.sort_tabs_desktop"/>)}

            </div>

            <div className = "focal_section">
                <Assortment/>
                
                {/*mobile*/}

                {width <= 768 && (
                    <div className = "settings_menu__dropdown">
                        <span className = "dropdown_display"></span>

                        <div className = "dropdown_display__button_place">
                            <span></span>
                            <button onClick = {handleToggleDropdown}><img src = {Arrow} alt="" /></button>

                        </div>

                        {isDropdownOpen &&(
                            <SortTabs className = "styles.sort_tabs_desktop"/>
                        )}
                        
                    </div>
                )}

                <div className = "ticket_list">


                </div>
                
                <LoadMoreButton/>

            </div>

        </div>
    );
}