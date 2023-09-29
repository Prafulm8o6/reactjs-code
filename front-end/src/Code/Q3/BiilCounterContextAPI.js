import React, { useContext } from 'react'
import { BillCounterContext } from './Context/BillCounterContext';

const BiilCounterContextAPI = () => {
    const context = useContext(BillCounterContext);
    return (
        <>
            <div className='container p-5'>
                <div className='text-center fs-1 fw-bold py-4'>
                    Billing System ( Using Context API )
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
                                        <button className='btn btn-dark' onClick={() => { context.addBargar() }}>+</button>
                                    </div>
                                    <div className='col'>
                                        {context.billInfo.bargar_qty}
                                    </div>
                                    <div className='col'>
                                        <button className='btn btn-dark' onClick={() => { context.removeBargar() }} disabled={((context.billInfo.bargar_qty) === 0) ? true : false}>-</button>
                                    </div>
                                </div>
                                <div className='col fw-bold py-3'>
                                    Total Price Of Burger : {context.billInfo.bargar_qty * context.billInfo.bargar_price}
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
                                        <button className='btn btn-dark' onClick={() => { context.addPizza() }}>+</button>
                                    </div>
                                    <div className='col'>
                                        {context.billInfo.pizza_qty}
                                    </div>
                                    <div className='col'>
                                        <button className='btn btn-dark' onClick={() => { context.removePizza() }} disabled={((context.billInfo.pizza_qty) === 0) ? true : false}>-</button>
                                    </div>
                                </div>
                                <div className='col fw-bold py-3'>
                                    Total Price Of Pizza : {context.billInfo.pizza_qty * context.billInfo.pizza_price}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row py-3'>
                            <div className='col p-5 card mx-auto'>
                                <h3>Bargar</h3>
                                <div>Quantity : {context.billInfo.bargar_qty}</div>
                                <div>Price : {context.billInfo.bargar_price}</div>
                                <div>Total Amount Of Bargar : {context.billInfo.bargar_qty * context.billInfo.bargar_price}</div>
                                <br />
                                <h3>Pizza</h3>
                                <div>Quantity : {context.billInfo.pizza_qty}</div>
                                <div>Price : {context.billInfo.pizza_price}</div>
                                <div>Total Amount Of Pizza : {context.billInfo.pizza_qty * context.billInfo.pizza_price}</div>
                                <br />
                                <h3>Total Price</h3>
                                <div>Total Amount : {(context.billInfo.bargar_qty * context.billInfo.bargar_price) + (context.billInfo.pizza_qty * context.billInfo.pizza_price)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BiilCounterContextAPI