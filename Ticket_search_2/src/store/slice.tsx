import { createAsyncThunk, createEntityAdapter, createSlice, type EntityState, type PayloadAction } from "@reduxjs/toolkit";
import type { Ticket } from "../data/types";
import { fetchMockTickets } from "../api/mockApi";

interface FiltersState {
    transfers: number[];
    companies: string[];
}

type SortMode = "price" | "speed" | "optimal";

interface TicketState extends EntityState<Ticket, number> {
    filters: FiltersState;
    sort: SortMode;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    visibleCount: number;
}

export const ticketsAdapter = createEntityAdapter<Ticket>();

const initialState: TicketState = ticketsAdapter.getInitialState({
    filters: {
        transfers: [],
        companies: [],
    },
    sort: "price",
    status: "idle",
    error: null,
    visibleCount: 10,
});

export const fetchTickets = createAsyncThunk("ticket/fetchTickets", async () => {
    const tickets = await fetchMockTickets();
    return tickets;
});

const TicketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {
        toggleTransfer(state, action: PayloadAction<number>) {
            const value = action.payload;
            if (state.filters.transfers.includes(value)) {
                state.filters.transfers = state.filters.transfers.filter((item) => item !== value);
            } else {
                state.filters.transfers.push(value);
            }
            state.visibleCount = 10;
        },

        toggleCompany(state, action: PayloadAction<string>) {
            const value = action.payload;
            if (state.filters.companies.includes(value)) {
                state.filters.companies = state.filters.companies.filter((item) => item !== value);
            } else {
                state.filters.companies.push(value);
            }
            state.visibleCount = 10;
        },

        setSort(state, action: PayloadAction<SortMode>) {
            state.sort = action.payload;
            state.visibleCount = 10;
        },

        loadMoreTickets(state) {
            state.visibleCount += 10;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTickets.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchTickets.fulfilled, (state, action) => {
                ticketsAdapter.setAll(state, action.payload);
                state.status = "succeeded";
                state.error = null;
                state.visibleCount = 10;
            })
            .addCase(fetchTickets.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message ?? "Не удалось загрузить билеты";
            });
    },
});

export const { toggleTransfer, toggleCompany, setSort, loadMoreTickets } = TicketSlice.actions;

export default TicketSlice.reducer;
