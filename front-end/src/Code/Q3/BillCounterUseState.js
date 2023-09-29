import React, { useState } from 'react'


const BillCounterUseState = () => {
    const [menuList, setMenuList] = useState(
        {
            bargar_price: 99,
            pizza_price: 199,
            bargar_qty: 0,
            pizza_qty: 0,
            total_price: 0
        }
    );
    return (
        <>
            <div className='container p-5'>
                <div className='text-center fs-1 fw-bold py-4'>
                    Billing System ( Using UseState )
                </div>
                <div className='row gap-2'>
                    <div className='col'>
                        <div className='row gap-2 my-0'>
                            <div className='my-3 col mx-auto card p-5'>
                                <div className='col text-center fs-1 py-3 fw-bold'>
                                    Burger
                                </div>
                                <div className='col text-center fs-4 py-3'>
                                    Quantity
                                </div>
                                <div className='row text-center'>
                                    <div className='col'>
                                        <button className='btn btn-dark' onClick={() => { setMenuList({ ...menuList, bargar_qty: menuList.bargar_qty + 1, total_price: ((menuList.bargar_qty * menuList.bargar_price) + (menuList.pizza_qty * menuList.pizza_price)) }) }}>+</button>
                                    </div>
                                    <div className='col'>
                                        {menuList.bargar_qty}
                                    </div>
                                    <div className='col'>
                                        <button className='btn btn-dark' onClick={() => { setMenuList({ ...menuList, bargar_qty: menuList.bargar_qty - 1, total_price: ((menuList.bargar_qty * menuList.bargar_price) + (menuList.pizza_qty * menuList.pizza_price)) }) }} disabled={((menuList.bargar_qty) === 0) ? true : false}>-</button>
                                    </div>
                                </div>
                                <div className='col fw-bold py-3'>
                                    Total Price Of Burger : {menuList.bargar_qty * menuList.bargar_price}
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
                                        <button className='btn btn-dark' onClick={() => { setMenuList({ ...menuList, pizza_qty: menuList.pizza_qty + 1, total_price: ((menuList.pizza_qty * menuList.pizzarice) + (menuList.pizza_qty * menuList.pizza_price)) }) }}>+</button>
                                    </div>
                                    <div className='col'>
                                        {menuList.pizza_qty}
                                    </div>
                                    <div className='col'>
                                        <button className='btn btn-dark' onClick={() => { setMenuList({ ...menuList, pizza_qty: menuList.pizza_qty - 1, total_price: ((menuList.pizza_qty * menuList.pizzarice) + (menuList.pizza_qty * menuList.pizza_price)) }) }} disabled={((menuList.pizza_qty) === 0) ? true : false}>-</button>
                                    </div>
                                </div>
                                <div className='col fw-bold py-3'>
                                    Total Price Of Pizza : {menuList.pizza_qty * menuList.pizza_price}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row py-3'>
                            <div className='col p-5 card mx-auto'>
                                <h3>Bargar</h3>
                                <div>Quantity : {menuList.bargar_qty}</div>
                                <div>Price : {menuList.bargar_price}</div>
                                <div>Total Amount Of Bargar : {menuList.bargar_qty * menuList.bargar_price}</div>
                                <br />
                                <h3>Pizza</h3>
                                <div>Quantity : {menuList.pizza_qty}</div>
                                <div>Price : {menuList.pizza_price}</div>
                                <div>Total Amount Of Pizza : {menuList.pizza_qty * menuList.pizza_price}</div>
                                <br />
                                <h3>Total Price</h3>
                                <div>Total Amount : {(menuList.bargar_qty * menuList.bargar_price) + (menuList.pizza_qty * menuList.pizza_price)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BillCounterUseState