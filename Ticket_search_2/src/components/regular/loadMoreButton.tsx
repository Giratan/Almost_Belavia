


import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadMoreTickets } from "../../store/slice";
import { selectFilteredTickets } from "../../store/selectFilteredTickets";

export const LoadMoreButton = () => {
    const dispatch = useAppDispatch();
    const visibleCount = useAppSelector((state) => state.ticket.visibleCount);
    const tickets = useAppSelector(selectFilteredTickets);
    const hasMore = visibleCount < tickets.length;

    return (
        <div>
            <button
                type="button"
                onClick={() => dispatch(loadMoreTickets())}
                disabled={!hasMore}
            >
                {hasMore ? "Загрузить еще билеты" : "Билеты загружены"}
            </button>
        </div>
    );
};
