import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBargar, addPizza, removeBargar, removePizza } from './Slice/BillCounterSlice'

const BillCounterRedux = () => {
    const billState = useSelector((state) => state.billSlice);
    const dispatch = useDispatch();
    return (
        <>
            <div className='container p-5'>
                <div className='text-center fs-1 fw-bold py-4'>
                    Billing System ( Using Redux )
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
                                        <button className='btn btn-dark' onClick={() => { dispatch(addBargar()) }}>+</button>
                                    </div>
                                    <div className='col'>
                                        {billState.bargar_qty}
                                    </div>
                                    <div className='col'>
                                        <button className='btn btn-dark' onClick={() => { dispatch(removeBargar()) }}
                                            disabled={((billState.bargar_qty) === 0) ? true : false}
                                        >-</button>
                                    </div>
                                </div>
                                <div className='col fw-bold py-3'>
                                    Total Price Of Burger : {billState.bargar_qty * billState.bargar_price}
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
                                        <button className='btn btn-dark' onClick={() => { dispatch(addPizza()) }}>+</button>
                                    </div>
                                    <div className='col'>
                                        {billState.pizza_qty}
                                    </div>
                                    <div className='col'>
                                        <button className='btn btn-dark' onClick={() => { dispatch(removePizza()) }} disabled={((billState.pizza_qty) === 0) ? true : false}>-</button>
                                    </div>
                                </div>
                                <div className='col fw-bold py-3'>
                                    Total Price Of Pizza : {billState.pizza_qty * billState.pizza_price}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row py-3'>
                            <div className='col p-5 card mx-auto'>
                                <h3>Bargar</h3>
                                <div>Quantity : {billState.bargar_qty}</div>
                                <div>Price : {billState.bargar_price}</div>
                                <div>Total Amount Of Bargar : {billState.bargar_qty * billState.bargar_price}</div>
                                <br />
                                <h3>Pizza</h3>
                                <div>Quantity : {billState.pizza_qty}</div>
                                <div>Price : {billState.pizza_price}</div>
                                <div>Total Amount Of Pizza : {billState.pizza_qty * billState.pizza_price}</div>
                                <br />
                                <h3>Total Price</h3>
                                <div>Total Amount : {(billState.bargar_qty * billState.bargar_price) + (billState.pizza_qty * billState.pizza_price)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BillCounterRedux