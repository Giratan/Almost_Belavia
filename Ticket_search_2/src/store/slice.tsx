import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type Ticket } from "../data/types";

interface FiltersState {
    transfers: number[];
    companies: string[];
}

interface TicketState {
    tickets: Ticket[];
    filters: FiltersState;
    sort: "price"|"speed"|"optimal";
}

const initialState: TicketState = {
    tickets: [],
    filters: {
        transfers: [],
        companies: [],
    },
    sort: "price",
};


const TicketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers:{
        
        setTickets(state, action: PayloadAction<Ticket[]>) {
            state.tickets = action.payload
        },

        toggleTransfer(state, action: PayloadAction<number>) {
            const value = action.payload;
            if (state.filters.transfers.includes(value)) {
                state.filters.transfers = state.filters.transfers.filter(item => item !== value);
            } else {
                state.filters.transfers.push(value);
            }
        },

        toggleCompany(state, action: PayloadAction<string>) {
            const value = action.payload;
            if (state.filters.companies.includes(value)) {
                state.filters.companies = state.filters.companies.filter(item => item !== value);
            } else {
                state.filters.companies.push(value);
            }
        },
        
        setSort(state, action: PayloadAction<"price"|"speed"|"optimal">) {
            state.sort = action.payload;
        },

    },
});

export const {
    setTickets,
    toggleTransfer,
    toggleCompany,
    setSort
} = TicketSlice.actions

export default TicketSlice.reducer;