import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export const selectFiltersText = createSelector(
    [(state: RootState) => state.ticket.filters],
    (filters) => {
        const hasCompanyFilter = filters.companies.length > 0;
        const hasTransferFilter = filters.transfers.length > 0;

        if (!hasCompanyFilter && !hasTransferFilter) {
            return "Любая авиакомпания, любое кол-во пересадок";
        }

        const parts: string[] = [];

        if (hasCompanyFilter) {
            parts.push(filters.companies.join(", "));
        } else {
            parts.push("Любая авиакомпания");
        }

        if (hasTransferFilter) {
            parts.push(`пересадок: ${filters.transfers.join(", ")}`);
        } else {
            parts.push("любое кол-во пересадок");
        }

        return parts.join(", ");
    }
);
