import { createSlice } from '@reduxjs/toolkit'

export const BillCounterSlice = createSlice({
    name: 'billSlice',
    initialState: {
        bargar_price: 99,
        pizza_price: 199,
        bargar_qty: 0,
        pizza_qty: 0,
        total_price: 0
    },
    reducers:
    {
        addBargar: (state, action) => {
            state.bargar_qty += 1;
            state.total_price = ((state.bargar_qty * state.bargar_price) + (state.pizza_qty * state.pizza_price));
        },
        removeBargar: (state, action) => {
            state.bargar_qty -= 1;
            state.total_price = ((state.bargar_qty * state.bargar_price) + (state.pizza_qty * state.pizza_price));
        },
        addPizza: (state, action) => {
            state.pizza_qty += 1;
            state.total_price = ((state.bargar_qty * state.bargar_price) + (state.pizza_qty * state.pizza_price));
        },
        removePizza: (state, action) => {
            state.pizza_qty -= 1;
            state.total_price = ((state.bargar_qty * state.bargar_price) + (state.pizza_qty * state.pizza_price));
        }
    }
})

export const { addPizza, removePizza, addBargar, removeBargar } = BillCounterSlice.actions;
export default BillCounterSlice.reducer;