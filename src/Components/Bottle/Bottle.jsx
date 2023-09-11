import './Bottle.css'
const Bottle = ({bottle, handelCart}) => {
    const {name, img, price} = bottle;
    return (
        <div className='bottle'>
            <h3>Name: {name}</h3>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <button onClick={() => handelCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;