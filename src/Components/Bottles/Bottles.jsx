import { useEffect, useState } from 'react'
import Bottle from '../Bottle/bottle';
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);
    const handelCart =(bottle)=>{
        const newCart = [...cart, bottle];
        setCart(newCart);
    }
    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <h4>Cart: {cart.length}</h4>

            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handelCart= {handelCart}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;