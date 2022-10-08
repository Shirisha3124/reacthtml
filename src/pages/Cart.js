import React from 'react';
import {menu} from '../database/menu';
import images8 from '../images/image8.jpg';
import "./Cart.css";


class Cart extends React.Component {
    constructor(props){
        super(props)
        this.state={
            mycart:[],
            total:0
        }
    }

    componentDidMount = async () => {
        const mycarts = menu
        const mycart = []
        mycarts.forEach((cart) => {
          
            cart["quantity"] = 0
            mycart.push(cart)
        })
        const total = this.totalAmount(mycart)
        this.setState({ mycart,total })
    }
    decrement = (e, id) => {
        const { mycart } = this.state
        const selectedCartIndex = mycart.findIndex((cart) => cart.id === id)
        const selectedCart = mycart[selectedCartIndex]
        const myquantity = selectedCart.quantity - 1
        if (myquantity !== 0) {
            selectedCart["quantity"] = myquantity
            mycart[selectedCartIndex] = selectedCart
            const total = this.totalAmount(mycart)
            this.setState({ mycart,total })
        }

    }
    increment = (e, id) => {
        const { mycart } = this.state
        const selectedCartIndex = mycart.findIndex((cart) => cart.id === id)
        const selectedCart = mycart[selectedCartIndex]
        const myquantity = selectedCart.quantity + 1
        selectedCart["quantity"] = myquantity
        mycart[selectedCartIndex] = selectedCart
        const total = this.totalAmount(mycart)
        this.setState({ mycart,total })
    }
    totalAmount = (cart) => {
        const total = cart.reduce((a, b) => {
            return a + b["price"] * b["quantity"]
        }, 0)
        return total
    }
    render() {
        const { mycart,total } = this.state
        return (
            <div className='container'>
                <div className="row mt-5">
                    <div className="col-sm-6" >
                        {
                            mycart.length !== 0 ? mycart.map((cart, index) => (
                                <div  key={index}>
                                    <div className="row g-0" style={{paddingTop:"10%"}}>
                                        <div className="col-sm-6" style={{paddingLeft:"10%"}}>
                                            <img src={cart.img} width="150" height="150" />
                                        </div>
                                        <div class="col-sm-6">
                                            </div>
                                        <div className="col-sm-7" style={{paddingLeft:"10%"}}>
                                            <div className="card-body">
                                                <h2 className="card-title" style={{fontSize:"18px"}}>{cart.name}</h2>
                                                <p style={{fontSize:"20px"}}>${cart.price}</p>
                                                <label className="form-label" style={{fontSize:"20px",paddingLeft:"1px"}} >Quantity</label>
                                                <input className='form-control mb-3' type="text" value={cart.quantity} readOnly />
                                                <button className='btn btn-info' style={{ marginRight: "5px" }} onClick={(e) => this.decrement(e, cart.id)} >-</button>
                                                <button className='btn btn-info' onClick={(e) => this.increment(e, cart.id)} >+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) : <div>Loading....</div>
                        }
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h1 className="card-title mb-3">Total $ {total} </h1>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;