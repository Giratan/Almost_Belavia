import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { ticketsAdapter } from "./slice";

const ticketsSelectors = ticketsAdapter.getSelectors((state: RootState) => state.ticket);

export const selectFilteredTickets = createSelector(
    [
        ticketsSelectors.selectAll,
        (state: RootState) => state.ticket.filters,
        (state: RootState) => state.ticket.sort,
    ],
    (tickets, filters, sort) => {
        let result = [...tickets];

        if (filters.transfers.length > 0) {
            const maxAllowed = Math.max(...filters.transfers);
            result = result.filter((ticket) => {
                const c = ticket.connectionAmount ?? 0;
                return c <= maxAllowed;
            });
        }

        if (filters.companies.length > 0) {
            result = result.filter((ticket) => filters.companies.includes(ticket.company));
        }

        switch (sort) {
            case "price":
                result.sort((a, b) => a.price - b.price);
                break;
            case "speed":
                result.sort((a, b) => a.duration - b.duration);
                break;
            case "optimal":
                result.sort((a, b) => a.price / a.duration - b.price / b.duration);
                break;
        }

        return result;
    }
);

