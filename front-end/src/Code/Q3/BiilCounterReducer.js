import React, { useReducer } from 'react'
const initailState = {
    bargar_price: 99,
    pizza_price: 199,
    bargar_qty: 0,
    pizza_qty: 0,
    total_price: 0
}

const BiilCounterReducer = () => {
    
    const reducer = (state, action) => {
        switch (action.type) {
            case "addBargar":
                return { ...state, bargar_qty: state.bargar_qty + 1, total_price: ((state.bargar_qty * state.bargar_price) + (state.pizza_qty * state.pizza_price)) }
            case "removeBargar":
                return { ...state, bargar_qty: state.bargar_qty - 1, total_price: ((state.bargar_qty * state.bargar_price) + (state.pizza_qty * state.pizza_price)) }
            case "addPizza":
                return { ...state, pizza_qty: state.pizza_qty + 1, total_price: ((state.bargar_qty * state.bargar_price) + (state.pizza_qty * state.pizza_price)) }
            case "removePizza":
                return { ...state, pizza_qty: state.pizza_qty - 1, total_price: ((state.bargar_qty * state.bargar_price) + (state.pizza_qty * state.pizza_price)) }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initailState);

    return (
        <>
            <div className='container p-5'>
                <div className='text-center fs-1 fw-bold py-4'>
                    Billing System ( Using Reducer )
                </div>
                <div className='row gap-2'>
                    <div className='col'>
                        <div className='row gap-2 my-0'>
                            <div className='my-3 col mx-auto card p-5'>
                                <div className='col text-center fs-1 py-3 fw-bold'>
                                    Burgar
                                </div>
                                <div className='col text-center fs-4 py-3'>
                                    Quantity
                                </div>
                                <div className='row text-center'>
                                    <div className='col'>
                                        <button className='btn btn-dark' onClick={() => { dispatch({ type: 'addBargar' }) }}>+</button>
                                    </div>
                                    <div className='col'>
                                        {state.bargar_qty}
                                    </div>
                                    <div className='col'>
                                        <button className='btn btn-dark' onClick={() => { dispatch({ type: 'removeBargar' }) }} disabled={((state.bargar_qty) === 0) ? true : false}>-</button>
                                    </div>
                                </div>
                                <div className='col fw-bold py-3'>
                                    Total Price Of Burger : {state.bargar_qty * state.bargar_price}
                                </div>
                            </div>
                            <div className='my-3 col mx-auto card p-5'>
                                <div className='col text-center fs-1 py-3 fw-bold'>
                                    Pizza
                                </div>
                                <div className='col text-center fs-4 py-3'>
                                    Quantity
                                </div>
                                <div className='row text-center'>
                                    <div className='col'>
                                        <button className='btn btn-dark' onClick={() => { dispatch({ type: 'addPizza' }) }}>+</button>
                                    </div>
                                    <div className='col'>
                                        {state.pizza_qty}
                                    </div>
                                    <div className='col'>
                                        <button className='btn btn-dark' onClick={() => { dispatch({ type: 'removePizza' }) }} disabled={((state.pizza_qty) === 0) ? true : false}>-</button>
                                    </div>
                                </div>
                                <div className='col fw-bold py-3'>
                                    Total Price Of Pizza : {state.pizza_qty * state.pizza_price}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row py-3'>
                            <div className='col p-5 card mx-auto'>
                                <h3>Bargar</h3>
                                <div>Quantity : {state.bargar_qty}</div>
                                <div>Price : {state.bargar_price}</div>
                                <div>Total Amount Of Bargar : {state.bargar_qty * state.bargar_price}</div>
                                <br />
                                <h3>Pizza</h3>
                                <div>Quantity : {state.pizza_qty}</div>
                                <div>Price : {state.pizza_price}</div>
                                <div>Total Amount Of Pizza : {state.pizza_qty * state.pizza_price}</div>
                                <br />
                                <h3>Total Price</h3>
                                <div>Total Amount : {(state.bargar_qty * state.bargar_price) + (state.pizza_qty * state.pizza_price)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BiilCounterReducer