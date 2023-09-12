import PropTypes from 'prop-types'
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
Bottle.propTypes={
    bottle: PropTypes.object.isRequired,
    handelCart: PropTypes.func.isRequired
}

export default Bottle;