import { mockTickets } from "../data/mockData";
import type { Ticket } from "../data/types";

export const fetchMockTickets = (): Promise<Ticket[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(mockTickets);
        }, 500);
    });
};
