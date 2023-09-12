const getStoreCard = () =>{
    const storeCardString = localStorage.getItem('card');
    if(storeCardString){
        return JSON.parse(storeCardString);
    }
    return [ ];
}

const saveToLS = cart =>{
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}

const addToLS = (id) =>{
    const cart = getStoreCard();
    cart.push(id);
    saveToLS(cart);
}

export {addToLS}