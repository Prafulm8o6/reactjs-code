import { configureStore } from "@reduxjs/toolkit";
import { BillCounterSlice } from "./Code/Q3/Slice/BillCounterSlice";

export const Store = configureStore(
    {
        reducer: {
            billSlice: BillCounterSlice.reducer
        }
    }
)